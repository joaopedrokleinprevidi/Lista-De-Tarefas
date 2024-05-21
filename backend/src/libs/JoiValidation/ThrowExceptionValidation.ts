export const throwExceptionValidation = ( error: any ) => {
    const errors = error?.details?.map(( detail: any ) => detail.message + " ")
    
    throw errors
}