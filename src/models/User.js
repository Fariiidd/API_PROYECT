import { Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const shcemaUser = new Schema({
    username: String,
    password: String,
    email: String,
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

shcemaUser.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10) // Agrego la cantidad de caracteres que tendra la password
    return await bcrypt.hash(password, salt) // La encripto
}

shcemaUser.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model("User", shcemaUser)