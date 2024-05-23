import * as UserControllersModule from '../../controllers/UserControllers'
import * as FirestoreService from '../../services/firebaseAdminService'

export const CreateUserController = UserControllersModule.CreateUserController(FirestoreService)
export const DeleteUserController = UserControllersModule.DeleteUserController(FirestoreService)
export const GetUserByEmailController = UserControllersModule.GetUserByEmailController(FirestoreService)