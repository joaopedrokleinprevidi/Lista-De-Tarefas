import { IValidationMethod } from "../../@types/services/ValidationService"
import { joiValidateFields } from "../../libs/JoiValidation"
import { registerSchema } from "../../libs/JoiValidation/schemas"

export const validationRegisterUser: IValidationMethod = ( body: any ) => {
    joiValidateFields(registerSchema, body)
}