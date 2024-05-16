import * as UserControllerModule from "../../controllers/CreateUserController"

import * as FirestoreService from "../../services/firebaseAdminService"

export const CreateUserController = UserControllerModule.CreateUserController(FirestoreService)