import "./config/firebaseAccountService"
import "express-async-errors"

import express from "express"
import cors from "cors"
import routes from "./routes"
import { ErrorHandlerMiddleware } from "./middlewares/ErrorHandlerMiddleware"

const app = express()

app.use(express.json())

app.use( cors({
    origin: [ "*" ],
    methods: [ "GET", "POST", "DELETE", "PUT" ],
    allowedHeaders: [ "Content-Type", "Authorization", "uid" ],
    credentials: false
}))

app.use(routes)

app.use(ErrorHandlerMiddleware)

export default app