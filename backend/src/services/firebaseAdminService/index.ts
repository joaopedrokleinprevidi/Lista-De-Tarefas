import { createUser } from "./CreateUser"
import { getUserByEmail } from "./GetUserByEmail"
import { deleteUser } from "./DeleteUser"

const FirebaseAuthService = {
    createUser,
    getUserByEmail,
    deleteUser
}

export default FirebaseAuthService