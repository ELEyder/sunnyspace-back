import admin, { ServiceAccount }from "firebase-admin";
const serviceAccount = require("../../config/serviceAccountKey.json") as ServiceAccount;

// Inicializar Firebase Admin con credenciales de servicio
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();