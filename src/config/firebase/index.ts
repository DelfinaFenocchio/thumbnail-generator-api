import { initializeApp } from "firebase/app";
import envVarConfig from "../envVar";

const firebaseConfig = {
  apiKey: envVarConfig.firebaseApiKey,
  authDomain: envVarConfig.firebaseAuthDomain,
  projectId: envVarConfig.firebaseProjectId,
  storageBucket: envVarConfig.firebaseStorageBucket,
  messagingSenderId: envVarConfig.firebaseMessagingSenderId,
  appId: envVarConfig.firebaseAppId,
  measurementId: envVarConfig.firebaseMeasurementId,
};

const app = initializeApp(firebaseConfig);

export default app;
