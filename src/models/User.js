import { Schema, model} from 'mongoose'

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

export default model("User", shcemaUser)