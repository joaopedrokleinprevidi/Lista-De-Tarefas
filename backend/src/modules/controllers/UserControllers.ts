import * as FirebaseAuthService from "../../services/firebaseAdminService"
import * as UserControllers from "../../controllers/userControllers"

export const CreateUserController = UserControllers.CreateUserController(FirebaseAuthService)
export const DeleteUserController = UserControllers.DeleteUserController(FirebaseAuthService)
export const GetUserByEmailController = UserControllers.GetUserByEmailController(FirebaseAuthService)