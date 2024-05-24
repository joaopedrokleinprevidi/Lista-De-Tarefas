import { NextFunction, Request, Response } from "express"
import { IValidationMethod } from "../@types"

export const ValidationMiddleware = ( ValidationMethod: IValidationMethod ) => {
            
    const execute = ( request: Request, response: Response, next: NextFunction ) => {

        try {
            ValidationMethod(request.body)

            next() 
        }

        catch ( error: any ) {
            response.status(400).send(error)
        }
    }   

    return execute
}