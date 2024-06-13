import { database } from "../../config/firebaseAccountService"
import { ITaskModel } from "../../@types"

export const deleteTask: ITaskModel["deleteTask"] = async ( userID, taskID ) => {

    await database.collection("Usuarios").doc(userID).collection("Tarefas").doc(taskID).delete()
}