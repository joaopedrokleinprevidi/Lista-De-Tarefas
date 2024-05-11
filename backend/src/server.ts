// import firebaseAccountService from "./config/firebaseAccountService"


import express from 'express';
import cors from 'cors';
import router from './routes';
// import { config } from 'dotenv';

const PORT = 4000;

const app = express();

console.log('hello world')

app.use(express.json());
app.use(cors({
    origin: ["*"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization", "uid"],
    credentials: false, // Habilita o envio de cookies de origens cruzadas(diferentes)
}))

app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})