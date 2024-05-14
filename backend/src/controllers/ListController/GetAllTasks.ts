import { ListModel } from "../../model"
import { Request, Response } from 'express'

export const ControllerGetAllTasks = async (request: Request, response: Response) => {
    
    try {
        const allTasks = await ListModel.GetAllTasks(request.body)
        response.status(200).json(allTasks)
    }

    catch {
        const error = new Error('INTERNAL ERROR: function "ControllerGetAllTasks()" in "Backend >> Controller >> ListController >> GetAllTasks.ts"')
        response.status(500).json({ message: ` ${error} ` })
    }

}