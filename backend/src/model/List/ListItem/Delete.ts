import { ITask } from "../../../@types"
import { database } from "../../../config/firebaseAccountService"

export const ModelDeleteTask = async (data: ITask) => {

    try {
        const { UserID } = data

        await database.collection(UserID).doc(data.Task.ID).delete()
    }
    
    catch {
        throw new Error('Runtime error in function "ModelDeleteTask()" in "Backend >> Model >> ListItem >> Delete.ts"')
    }

}