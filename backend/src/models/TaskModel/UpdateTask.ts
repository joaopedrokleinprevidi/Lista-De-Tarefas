import { database } from "../../config/firebaseAccountService"
import { ITaskModel } from "../../@types/models"

export const updateTask: ITaskModel["updateTask"] = async ( userID, taskID, taskUpdated ) => {
   
    try {
        await database.collection("Usuarios").doc(userID).collection("Tarefas").doc(taskID).update(taskUpdated)
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}