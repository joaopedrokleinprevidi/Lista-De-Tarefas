import Joi from "joi"
import { errorMessages } from "./ErrorMessages"
import { throwExceptionValidation } from "./ThrowExceptionValidation"

export const joiValidateFields = ( schemasToReceive: any, dataFromInputFields: any ) => {
    
    const schemas = Joi.object(schemasToReceive).messages(errorMessages)

    const { error } = schemas.validate(dataFromInputFields, { abortEarly: false })

    if ( error ) throwExceptionValidation(error)
}