import { Request, Response } from 'express'
import { UsersModel } from '../model';

export const ControllerCreateNewUser = async (request: Request, response: Response) => {
    
    try {
        await UsersModel.CreateNewUser(request.body)
        response.status(201).json({ message: "User created successfully." })
    }

    catch{
        throw new Error('Runtime error in function "ControlerCreateNewUser()" in "UsersController"')
    }

}
