import { Request, Response, NextFunction } from "express" 
import { IUserService } from "../@types"
import { UnhandledError } from "../errors/ApplicationError"

export const AuthUserMiddleware = ( UserService: IUserService ) => {

    const execute = async ( request: Request, response: Response, next: NextFunction ) => {
      
        const authHeader = request.headers.authorization

        if ( !authHeader ) throw new UnhandledError("Token not provided.") 

        const token = authHeader.split(" ")[1]

        await UserService.authUser(token)

        next()
    }

    return execute
}