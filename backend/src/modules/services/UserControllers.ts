import * as UserControllerModule from "../../controllers/UserControllers/"

import * as FirestoreService from "../../services/firebaseAdminService"

export const CreateUserController = UserControllerModule.CreateUserController(FirestoreService)
export const DeleteUserController = UserControllerModule.DeleteUserController(FirestoreService)
export const GetUserByEmailController = UserControllerModule.GetUserByEmailController(FirestoreService)