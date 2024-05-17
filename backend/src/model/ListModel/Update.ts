import { ITask } from "../../@types"
import { database } from "../../config/firebaseAccountService"

export const ModelUpdateTask = async (data: ITask, newData: any) => {
    
    try {
        const { UserID } = data

        await database.collection(UserID).doc(data.Task.ID).update(newData)
    }

    catch {
        throw new Error('Runtime error in function "ModelUpdateTask()" in "Backend >> Model >> ListItem >> Update.ts"')
    }

}