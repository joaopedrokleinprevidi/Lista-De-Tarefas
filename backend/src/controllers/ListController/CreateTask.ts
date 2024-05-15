import { ListModel } from "../../model"
import { Request, Response } from 'express'

export const ControllerCreateTask = async (request: Request, response: Response) => {
    
    try {
        await ListModel.CreateTask(request.body)
        response.status(201).json({ message: 'Task created successfully.' })
    }

    catch {
        const error = new Error('INTERNAL ERROR: function "ControllerCreateTask()" in "Backend >> Controller >> ListController >> CreateTask.ts"')
        response.status(500).json({ message: ` ${error} ` })
    }

}