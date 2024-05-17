export const runValidationIn = ( schema: any ) => {

    const With = ( dataToBeValidated: any ) => {
        const validation = schema.validate(dataToBeValidated, { abortEarly: false });

        console.log( "schema: ", schema)
        console.log("data sent:", dataToBeValidated)

        if (validation.error){
            const errors = validation.error.details.map((detail: any) => detail.message + " ");
            return errors
        }
    }

    return { With }
}