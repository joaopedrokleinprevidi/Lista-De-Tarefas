import * as ValidationService from "../../services/validationService"
import { ValidationMiddleware } from "../../middlewares/ValidationMiddleware"

export const ValidationTaskMiddleware = ValidationMiddleware(ValidationService.validationTask)
export const ValidationRegisterMiddleware = ValidationMiddleware(ValidationService.validationRegisterUser)
export const ValidationUpdateTaskMiddleware = ValidationMiddleware(ValidationService.validationUpdateTask)