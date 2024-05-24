import { Request, Response, NextFunction } from "express" 
import { IUserService } from "../@types"

export const AuthUserMiddleware = ( UserService: IUserService ) => {

    const execute = async ( request: Request, response: Response, next: NextFunction ) => {
      
        try {
            const authHeader = request.headers.authorization

            if ( !authHeader ) throw new Error("Token não informado") 

            const token = authHeader.split(" ")[1]

            await UserService.authUser(token)
        }

        catch ( error: any ) {
            response.status(500).json(error)
        }
    }

    return execute
}