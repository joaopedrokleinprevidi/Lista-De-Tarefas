import { UserRecord } from "firebase-admin/auth"

export interface IUserService {
    createUser: ( email: string, password: string ) => Promise<UserRecord>
}