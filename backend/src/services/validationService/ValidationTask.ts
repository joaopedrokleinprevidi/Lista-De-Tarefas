import { joiValidateFields } from "../../libs/JoiValidation"
import { taskSchema } from "../../libs/JoiValidation/schemas"
import { IValidationMethod } from "../../@types/services/ValidationService"

export const validationTask: IValidationMethod = ( body: any ) => {
    joiValidateFields(taskSchema, body)
}