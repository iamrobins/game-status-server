import admin, { ServiceAccount } from "firebase-admin";
import firebaseAccountCredentials from "./serviceAccount.json";

const serviceAccount = firebaseAccountCredentials as ServiceAccount;

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
