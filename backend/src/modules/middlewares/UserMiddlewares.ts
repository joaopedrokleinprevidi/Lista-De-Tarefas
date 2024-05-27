import { AuthUserMiddleware as AuthUserMiddlewareFactory } from "../../middlewares/AuthUserMiddleware"
import * as FirebaseService from "../../services/firebaseAdminService"

export const AuthUserMiddleware = AuthUserMiddlewareFactory(FirebaseService)