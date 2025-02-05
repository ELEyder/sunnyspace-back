import admin, { ServiceAccount }from "firebase-admin";
const serviceAccount = require("../../config/serviceAccountKey.json") as ServiceAccount;

// Inicializar Firebase Admin con credenciales de servicio
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export default db;
