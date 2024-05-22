import * as UserControllersModule from '../../controllers/UserControllers'
import * as UserService from '../../services/firebaseAdminService'

export const CreateUserController = UserControllersModule.CreateUserController(UserService)
export const DeleteUserController = UserControllersModule.DeleteUserController(UserService)
export const GetUserByEmailController = UserControllersModule.GetUserByEmailController(UserService)