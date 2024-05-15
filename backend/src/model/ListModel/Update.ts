import { IUpdateTask } from "../../@types"
import { database } from "../../config/firebaseAccountService"

export const ModelUpdateTask = async (data: IUpdateTask) => {
    
    try {

        await database.collection(data.UserID).doc(data.Task.ID).update(data.NewTask)
    }

    catch {
        throw new Error('Runtime error in function "ModelUpdateTask()" in "Backend >> Model >> ListItem >> Update.ts"')
    }

}