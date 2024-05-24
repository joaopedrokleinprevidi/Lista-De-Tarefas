import "./config/firebaseAccountService"
import { config } from "dotenv"
import express from "express"
import cors from "cors"
import routes from "./routes"

config({ path: "src/config/.env" })

const PORT = process.env.PORT || 4000
const app = express()

app.use( express.json() )

app.use( cors({
    origin: [ "*" ],
    methods: [ "GET", "POST", "DELETE", "PUT" ],
    allowedHeaders: [ "Content-Type", "Authorization", "uid" ],
    credentials: false
}))

app.use(routes)

app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`) )