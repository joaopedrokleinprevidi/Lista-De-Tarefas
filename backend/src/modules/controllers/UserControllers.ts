import * as FirebaseAuthService from "../../services/firebaseAdminService"
import * as UserControllersModule from "../../controllers/userControllers"

export const CreateUserController = UserControllersModule.CreateUserController(FirebaseAuthService)
export const DeleteUserController = UserControllersModule.DeleteUserController(FirebaseAuthService)
export const GetUserByEmailController = UserControllersModule.GetUserByEmailController(FirebaseAuthService)