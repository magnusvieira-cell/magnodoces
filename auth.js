import { auth, db } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));
    const role = userDoc.data().role;

    const pagina = window.location.pathname;

    const paginasAdmin = [
        "/index.html",
        "/compras.html",
        "/estoque.html",
        "/receitas.html",
        "/vendas.html",
        "/dashboard.html"
    ];

    if (role === "cliente" && paginasAdmin.includes(pagina)) {
        window.location.href = "pedidos.html";
    }
});
