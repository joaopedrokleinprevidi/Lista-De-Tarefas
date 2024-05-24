import { getAuth } from "firebase-admin/auth"
import { IUserService } from "../../@types/services/UserService"

export const getUserByEmail: IUserService["getUserByEmail"] = async ( email: string ) => {
    return await getAuth().getUserByEmail(email)
}