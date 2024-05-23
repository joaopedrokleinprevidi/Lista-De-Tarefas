import * as UserControllersModule from '../../controllers/UserControllers'
import FirebaseAuthService from '../../services/firebaseAdminService'

export const CreateUserController = UserControllersModule.CreateUserController(FirebaseAuthService)
export const DeleteUserController = UserControllersModule.DeleteUserController(FirebaseAuthService)
export const GetUserByEmailController = UserControllersModule.GetUserByEmailController(FirebaseAuthService)