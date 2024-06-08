import { Router } from "express"
import categoriesRoutes from "./CategoriesRoutes"
import taskRoutes from "./TaskRoutes"
import userRoutes from "./UserRoutes"

const routes = Router()

routes.use("/categories", categoriesRoutes)
routes.use("/tasks", taskRoutes)
routes.use("/auth", userRoutes)

export default routes