export const runValidation = ( schema: any, dataToBeValidated: any ) => {

    const validation = schema.validate(dataToBeValidated, { abortEarly: false });

    if (validation.error){
        const errors = validation.error.details.map((detail: any) => detail.message + " ");
        console.log(errors)
        return errors
    }

}