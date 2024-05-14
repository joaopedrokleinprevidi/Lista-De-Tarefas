import { ITask } from "../../@types"
import { database } from "../../config/firebaseAccountService"

export const ModelGetTask = async (data: ITask) => {
    
    try {
        const { UserID } = data

        await database.collection(UserID).doc(data.Task.ID).get()
    }

    catch {
        throw new Error('Runtime error in function "ModelGetTask()" in "Backend >> Model >> ListItem >> Get.ts"')
    }

}