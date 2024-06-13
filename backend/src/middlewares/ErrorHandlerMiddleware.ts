import { NextFunction, Request, Response } from "express"
import { HttpsRequestError } from "../errors/HttpsRequestError"

export const ErrorHandlerMiddleware = ( error: any, request: Request, response: Response, next: NextFunction ) => {
    if( !(error instanceof HttpsRequestError) ) {
        console.log(error)

        error = new HttpsRequestError()
    }

    response.status(error.statusCode).json({ error: error.json })
}