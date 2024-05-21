import { database } from "../../config/firebaseAccountService"
import { ITask, ITaskModel } from "../../@types"

export const getAllTasks: ITaskModel["getAllTasks"] = async ( userID ) => {

    try {
        const snapshot = await database.collection("Usuarios").doc(userID).collection('Tarefas').get()

        const tasks = snapshot.docs.map( doc => ({
            id: doc.id,
            ...doc.data(),
        }))

        return tasks as ITask[]
    }

    catch ( error: any ) {
        throw new Error(error)
    }

}