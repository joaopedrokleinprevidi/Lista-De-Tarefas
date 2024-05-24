import { IUser } from "../domain/User"

export interface IUserService {
    authUser: ( toke: string ) => Promise<void>
    createUser: ( email: string, password: string ) => Promise<IUser>
    getUserByEmail: ( email: string ) => Promise<IUser>
    deleteUser: ( userID: string ) => Promise<void> 
}