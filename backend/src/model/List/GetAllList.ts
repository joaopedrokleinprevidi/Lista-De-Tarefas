import { IUserID } from "../../@types"
import { database } from "../../config/firebaseAccountService"

//Estou desestruturando porque antes o TypeScript estava dando erro.
export const getList = async ({UserID}: IUserID) => {

    try {
        await database.collection(UserID).get()
    }

    catch {
        throw new Error('Runtime error in function "GetAllList()" in "ListModel')
    }

}