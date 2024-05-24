import  admin  from "firebase-admin"
import { getFirestore } from "firebase-admin/firestore"
import { config } from "dotenv"

config({ path: "src/config/.env" })

const serviceAccount: admin.ServiceAccount = {
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL
}

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

export const database = getFirestore()