export interface IUserService {
    createUser: ( email: string, password: string ) => Promise<void>
}