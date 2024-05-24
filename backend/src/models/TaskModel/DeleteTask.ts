import { database } from "../../config/firebaseAccountService"
import { ITaskModel } from "../../@types"

export const deleteTask: ITaskModel["deleteTask"] = async ( userID, taskID ) => {

    try {
        await database.collection("Usuarios").doc(userID).collection("Tarefas").doc(taskID).delete()
    }
    
    catch ( error: any ) {
        throw new Error(error)
    }
}