import { ListModel } from "../../model"
import { Request, Response } from 'express'

export const ControllerUpdateTask = async (request: Request, response: Response) => {
        
    try {
        await ListModel.UpdateTask(request.body)
        response.status(200).json({ message: 'Task updated successfully.' })
    }

    catch {
        const error = new Error('INTERNAL ERROR: function "ControllerUpdateTask()" in "Backend >> Controller >> ListController >> UpdateTask.ts"')
        response.status(500).json({ message: ` ${error} ` })
    }
    
}