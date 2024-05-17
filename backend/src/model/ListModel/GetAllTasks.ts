import { IUserID } from "../../@types"
import { database } from "../../config/firebaseAccountService"

//Estou desestruturando porque antes o TypeScript estava dando erro.
export const ModelGetAllTasks = async ({UserID}: IUserID) => {

    try {
        const snapshot = await database.collection(UserID).get()

        const tasks = snapshot.docs.map((doc) => ({
            uid: doc.id,
            ...doc.data(),
          }));

        return tasks
    }

    catch {
        throw new Error('Runtime error in function "ModelGetAllTasks()" in "List >> GetAllTasks.ts')
    }

}