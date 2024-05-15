import { ListModel } from "../../model"
import { Request, Response } from 'express'

export const ControllerCheckAllTasks = async (request: Request, response: Response) => {
        
    try {
        const tasks = await ListModel.CheckAllTasks(request.body)
        response.status(200).json(tasks)
    }

    catch {
        const error = new Error('INTERNAL ERROR: function "ControllerCheckAllTask()" in "Backend >> Controller >> ListController >> CheckAll.ts"')
        response.status(500).json({ message: ` ${error} ` })
    }

}
    