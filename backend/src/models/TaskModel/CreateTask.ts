import { database } from "../../config/firebaseAccountService"
import { ITaskModel } from "../../@types"

export const createTask: ITaskModel["createTask"] = async ( userID, task ) => {

    try {
        await database.collection(userID).add(task)  
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}