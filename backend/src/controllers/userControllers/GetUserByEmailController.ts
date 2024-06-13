import { Request, Response } from "express"
import { IUserService } from "../../@types"

export const GetUserByEmailController = ( UserService: IUserService ) => {

    const execute = async ( request: Request, response: Response ) => {

        const { email } = request.body
        const user = await UserService.getUserByEmail(email)

        response.status(200).json(user)
    }

    return execute
}