import { initializeApp } from "firebase/app";

// FirebaseApp configuration according to documentation
const firebaseConfig = {
    apiKey: "AIzaSyDNqJnjNaZxKnBpUtinqxrS8LhaTtsqMJw",
    authDomain: "coderhouse-ecommerce-rafa90.firebaseapp.com",
    projectId: "coderhouse-ecommerce-rafa90",
    storageBucket: "coderhouse-ecommerce-rafa90.appspot.com",
    messagingSenderId: "475569721390",
    appId: "1:475569721390:web:46fe5bb9018c948d290fbf",
    measurementId: "G-2E4MLR92MZ",
};

const app = initializeApp(firebaseConfig);

export const firebaseConnections = () => app;
