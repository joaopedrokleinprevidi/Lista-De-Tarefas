import { validationMiddleware } from '../../middlewares/validationMiddleware'
import { joiValidateFields } from '../../libs/JoiValidation'
import { taskSchema, registerSchema } from '../../libs/JoiValidation/schemas'

export const validationTasks = validationMiddleware(joiValidateFields, taskSchema)
export const validationRegister = validationMiddleware(joiValidateFields, registerSchema)