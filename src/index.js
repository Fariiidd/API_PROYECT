require("dotenv").config({path: "dotenv.env"})
import app from './app'

const port = process.env.PORT 

app.listen(port, () => {
    console.log(`Listening on port:`, port)
})