import { NextFunction, Request, Response } from "express"

export const validationMiddleware = (validate: any, schema: any) => {
            
    const execute = ( request: Request, response: Response, next: NextFunction ) => {

        const validation = validate(schema, request.body)

        if ( validation === undefined || validation === null ) { next() }  
    
        else  { response.status(400).send(validation) }
    }   

    return { execute } 
}
