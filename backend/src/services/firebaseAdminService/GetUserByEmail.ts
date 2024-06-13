import { getAuth } from "firebase-admin/auth"
import { IUserService } from "../../@types/services/UserService"
import { IUser } from "../../@types/domain/User"

export const getUserByEmail: IUserService["getUserByEmail"] = async ( email: string ) => {
    
    const user = await getAuth().getUserByEmail(email) as IUser

    return { uid: user.uid, email: user.email }
}