import { Request, Response } from "express"
import { IUserService } from "../../@types"

export const DeleteUserController = ( UserService: IUserService ) => {

    const execute = async ( request: Request, response: Response ) => {

        const { userID } = request.body
        
        await UserService.deleteUser(userID)

        response.status(200).json({ message: "User deleted successfully." })
    }

    return execute
}