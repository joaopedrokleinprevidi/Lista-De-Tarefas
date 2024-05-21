import { database } from "../../config/firebaseAccountService"
import { ITaskModel } from "../../@types"

export const createTask: ITaskModel["createTask"] = async ( userID, task ) => {

    try {
        await database.collection("Usuarios").doc(userID).collection("Tarefas").add(task)  
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}