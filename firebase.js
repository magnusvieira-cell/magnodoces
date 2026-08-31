// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZ9j9lf8Zo9vCq3_Sp7uqomTb3XKGVVwk",
  authDomain: "magnodoces-c7af7.firebaseapp.com",
  projectId: "magnodoces-c7af7",
  storageBucket: "magnodoces-c7af7.firebasestorage.app",
  messagingSenderId: "76553441552",
  appId: "1:76553441552:web:c17aff981c7ad34aaad595"
};

// Inicialização
const app = initializeApp(firebaseConfig);

// Banco de dados Firestore
export const db = getFirestore(app);

// Autenticação
export const auth = getAuth(app);
