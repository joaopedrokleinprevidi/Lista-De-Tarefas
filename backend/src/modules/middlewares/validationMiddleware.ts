import { validationMiddleware } from '../../middlewares/validationMiddleware'
import { validationRegisterUser, validationTask, validationUpdateTask } from '../../services/validationService'

export const validationTaskMiddleware = validationMiddleware(validationTask)
export const validationRegisterMiddleware = validationMiddleware(validationRegisterUser)
export const validationUpdateTaskMiddleware = validationMiddleware(validationUpdateTask)