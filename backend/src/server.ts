import './config/firebaseAccountService'

import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/TaskRoutes';
import userRoutes from './routes/CategoriesRoutes';
import categoriesRoutes from './routes/CategoriesRoutes';

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["*"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization", "uid"],
    credentials: false, // Habilita o envio de cookies de origens cruzadas(diferentes)
}))

app.use(taskRoutes)
app.use(userRoutes)
app.use(categoriesRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
})