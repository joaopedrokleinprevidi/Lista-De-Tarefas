import app from "./app"
import { config } from "dotenv"

config({ path: "src/config/.env" })

const PORT = process.env.PORT || 4000

app.listen( PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`) )