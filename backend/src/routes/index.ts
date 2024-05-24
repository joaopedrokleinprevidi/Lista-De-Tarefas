import { Router } from "express"
import categoriesRoutes from "./categoriesRoutes"
import taskRoutes from "./taskRoutes"
import userRoutes from "./userRoutes"

const routes = Router()

routes.use(categoriesRoutes)
routes.use(taskRoutes)
routes.use(userRoutes)

export default routes