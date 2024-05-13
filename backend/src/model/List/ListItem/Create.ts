import { ITask } from "../../../@types";
import { database } from "../../../config/firebaseAccountService"

export const createTask = async (data: ITask) => {

    try {
        const { UserID } = data;
      
        await database.collection(UserID).add(data.Task)  
    }

    catch {
        throw new Error('Runtime error in function "createTask()" in "ListItemModel"')
    }

 }