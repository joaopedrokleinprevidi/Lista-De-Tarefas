import { joiValidateFields } from "../../libs/JoiValidation"
import { updateTaskSchema } from "../../libs/JoiValidation/schemas"
import { IValidationMethod } from "../../@types"

export const validationUpdateTask: IValidationMethod = ( body: any ) => {
    joiValidateFields(updateTaskSchema, body)
}