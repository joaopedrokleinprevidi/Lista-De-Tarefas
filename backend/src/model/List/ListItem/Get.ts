import { ITask } from "../../../@types"
import { database } from "../../../config/firebaseAccountService"

export const getTask = async (data: ITask) => {
    
    try {
        const { UserID } = data

        await database.collection(UserID).doc(data.Task.ID).get()
    }

    catch {
        throw new Error('Runtime error in function "getTask()" in "ListItemModel"')
    }

}