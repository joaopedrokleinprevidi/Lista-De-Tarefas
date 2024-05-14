import { ListModel } from "../../model"
import { Request, Response } from 'express'

export const ControllerDeleteTask = async (request: Request, response: Response) => {
    
    try {
        await ListModel.DeleteTask(request.body)
        response.status(200).json({ message: "Task deleted sucessfuly." })
    }

    catch {
        const error = new Error('INTERNAL ERROR: function "ControllerDeleteTask()" in "Backend >> Controller >> ListController >> DeleteTask.ts"')
        response.status(500).json({ message: ` ${error} ` })
    }
    
}