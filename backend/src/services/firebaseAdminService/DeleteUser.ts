import { getAuth } from "firebase-admin/auth"
import { IUserService } from "../../@types/services/UserService"

export const deleteUser: IUserService["deleteUser"] = async ( userID: string ) => {
    await getAuth().deleteUser(userID)
}