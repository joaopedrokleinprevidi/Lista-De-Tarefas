import { Request, Response } from 'express'
import { usersModel } from '../model/User';

const createUser = async (request: Request, response: Response) => {
    try {
        await usersModel.createNewUser(request.body)
        response.status(201).json({ message: "User created successfully." })
    }

    catch{
        throw new Error('Runtime error in function "createUser()" in "UsersController"')
    }
}

export const usersController = {
    createUser 
} 
