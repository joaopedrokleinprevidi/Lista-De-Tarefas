import { Request, Response } from 'express'
import { IUserService } from '../@types'

export const CreateUserController = ( UserService: IUserService ) => {
    const execute = async ( request: Request, response: Response ) => {

        try {
            const { email, password } = request.body
            
            await UserService.createUser(email, password)

            response.status(201).json({ message: "User created successfully." })
        }
    
        catch ( error: any ) {
            throw new Error(error)
        }

    }

    return execute
}