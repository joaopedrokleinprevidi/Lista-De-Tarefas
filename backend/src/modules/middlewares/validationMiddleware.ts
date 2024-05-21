import { validationMiddleware } from '../../middlewares/validationMiddleware'
import { validationRegisterUser, validationTask } from '../../services/validationService'

export const validationTaskMiddleware = validationMiddleware(validationTask)
export const validationRegisterMiddleware = validationMiddleware(validationRegisterUser)