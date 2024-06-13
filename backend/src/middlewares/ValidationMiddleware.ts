import { NextFunction, Request, Response } from "express"
import { IValidationMethod } from "../@types"

export const ValidationMiddleware = ( ValidationMethod: IValidationMethod ) => {
            
    const execute = ( request: Request, response: Response, next: NextFunction ) => {
        ValidationMethod(request.body)

        next()
    }   

    return execute
}