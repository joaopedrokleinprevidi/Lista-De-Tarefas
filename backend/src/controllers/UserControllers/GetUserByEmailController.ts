import { Request, Response } from "express"
import { IUserService } from "../../@types"

export const GetUserByEmailController = ( UserService: IUserService ) => {

    const execute = async ( request: Request, response: Response ) => {

        try {
            const { email } = request.body
            const user = await UserService.getUserByEmail(email)

            response.status(200).json(user)
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }
    }

    return execute
}