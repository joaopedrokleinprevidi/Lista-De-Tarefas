import "./config/firebaseAccountService"

import express from "express"
import cors from "cors"
import routes from "./routes"

const app = express()

app.use(express.json())

app.use( cors({
    origin: [ "*" ],
    methods: [ "GET", "POST", "DELETE", "PUT" ],
    allowedHeaders: [ "Content-Type", "Authorization", "uid" ],
    credentials: false
}))

app.use(routes)

export default app