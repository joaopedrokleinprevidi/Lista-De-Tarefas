import { joiValidateFields } from "../../libs/JoiValidation"
import { registerSchema } from "../../libs/JoiValidation/schemas"
import { IValidationMethod } from "../../@types"

export const validationRegisterUser: IValidationMethod = ( body: any ) => {
    joiValidateFields(registerSchema, body)
}