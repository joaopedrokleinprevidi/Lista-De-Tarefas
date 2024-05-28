import { database } from "../../config/firebaseAccountService"
import { ITask, ITaskModel } from "../../@types"

export const createTask: ITaskModel["createTask"] = async ( userID, task ) => {

    try {
        const newTask = await database.collection("Usuarios").doc(userID).collection("Tarefas").add(task)
        const newTaskDoc = await newTask.get()

        return { id: newTaskDoc.id, ...newTaskDoc.data() } as ITask
    }

    catch ( error: any ) {
        throw new Error(error)
    }
}