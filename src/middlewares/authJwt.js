require("dotenv").config({path: "dotenv.env"})
import jwt from 'jsonwebtoken'
import User from '../models/User'
import Role from '../models/Roles'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]

        if(!token) return res.status(403).json({message: "Token requere"})

        const decoded = jwt.verify(token, process.env.SECRET)
        req.id = decoded.id

        const user = await User.findById(req.id, {password: 0})
        if (!user) return res.status(404).json({message: "User not found"})
        console.log(user)

        next()
        
    } catch (error) {
        console.log(error)
    }
}

export const moderatorAuth = async (req, res, next) => {
    try {
        const user = await User.findById(req.id)

        const role = await Role.find({_id: {$in: user.roles}})

        for (let i = 0; i < role.length; i++) {
            if(role[i].name === "moderator") {
                next()
                return;
            }
        }

        return res.status(404).json({message: "Requere Moderator role"})

    } catch (error) {
        console.log(error);
    }

}

export const adminAuth = async (req, res, next) => {
    try {
        const user = await User.findById(req.id)

        const role = await Role.find({_id:{$in: user.roles}})

        for (let i = 0; i < role.length; i++) {
            if(role[i].name === "admin") {
                next()
                return;
            }
        }

        return res.status(404).json({message: "Requere Admin role"})

    } catch (error) {
        console.log(error);
    }

}