import User from '../models/User' 

const Auth = {
    signUp: (req, res) => {
        res.json("signUp")
    },
    signIn: (req, res) => {
        res.json("sigin")
    },
}

export default Auth