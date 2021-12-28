require('dotenv').config({path: "dotenv.env"})
import Roles from '../models/Roles'
import User from '../models/User'

import jwt  from 'jsonwebtoken'

const Auth = {
    signUp: async (req, res) => {        
       try {

        const { username, email, password, roles} = req.body;

        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })

        if(roles) {
            const foundRole = await Roles.find({name: {$in: roles}})
            newUser.roles = foundRole.map(role => role._id)
        }else {
            const role = await Roles.findOne({name: "user"})
            newUser.roles = [role._id]
        }

        const userSave = await newUser.save()

        const token = jwt.sign({id: userSave._id}, process.env.SECRET, {
            expiresIn: 86400 // 24h
        })

        res.json({token})
           
       } catch (error) {
           console.log(error)
           console.log("Error en sigUp")
       }

    },
    signIn: async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email}).populate("roles")

            if (!user) {
                return res.status(400).json({message: "User not found"})
            }

            const matchPassword = await User.comparePassword(req.body.password, user.password)
            
            if (!matchPassword) {
                return res.status(400).json({message: "Invalid Password"})
            }

            const token = jwt.sign({id: user._id}, process.env.SECRET, {
                expiresIn: 86400 // 24h
            })
    
            res.json({token})
            
        } catch (error) {
            console.log(error)
            console.log("Error en sigIn")
        }
    },
}

export default Auth