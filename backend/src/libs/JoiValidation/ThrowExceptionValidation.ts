import { InvalidFieldsError } from "../../errors/ValidationErrors"

export const throwExceptionValidation = ( error: any ) => {
    const fieldErrors = error?.details?.map(( detail: any ) => detail.message + " ")
    
    throw new InvalidFieldsError(fieldErrors)
}