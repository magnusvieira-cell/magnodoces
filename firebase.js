// ===============================
// CONFIGURAÇÃO DO FIREBASE
// ===============================
var firebaseConfig = {
  apiKey: "AIzaSyBZ9j9lf8Zo9vCq3_Sp7uqomTb3XKGVVwk",
  authDomain: "magnodoces-c7af7.firebaseapp.com",
  projectId: "magnodoces-c7af7",
  storageBucket: "magnodoces-c7af7.appspot.com",
  messagingSenderId: "76553441552",
  appId: "1:76553441552:web:c17aff981c7ad34aaad595"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// ===============================
// LOGIN
// ===============================
function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
            window.location.href = "dashboard.html";
        })
        .catch(err => {
            alert("Erro ao entrar: " + err.message);
        });
}

// ===============================
// LOGOUT
// ===============================
function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
    });
}

// ===============================
// CADASTRO DE USUÁRIO
// ===============================
function cadastrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    auth.createUserWithEmailAndPassword(email, senha)
        .then(() => {
            alert("Usuário criado com sucesso!");
        })
        .catch(err => {
            alert("Erro ao cadastrar: " + err.message);
        });
}

// ===============================
// ESTOQUE
// ===============================
function salvarIngrediente(nome, medida, quantidade, custo) {
    return db.collection("estoque").add({
        nome,
        medida,
        quantidade,
        custo
    });
}

function atualizarIngrediente(id, dados) {
    return db.collection("estoque").doc(id).update(dados);
}

function removerIngrediente(id) {
    return db.collection("estoque").doc(id).delete();
}

// ===============================
// PRODUTOS FINAIS
// ===============================
function salvarProdutoFinal(dados) {
    return db.collection("produtosFinais").add(dados);
}

function atualizarProdutoFinal(id, dados) {
    return db.collection("produtosFinais").doc(id).update(dados);
}

function removerProdutoFinal(id) {
    return db.collection("produtosFinais").doc(id).delete();
}

// ===============================
// PEDIDOS
// ===============================
function salvarPedido(dados) {
    return db.collection("pedidos").add(dados);
}

function atualizarPedido(id, dados) {
    return db.collection("pedidos").doc(id).update(dados);
}

function removerPedido(id) {
    return db.collection("pedidos").doc(id).delete();
}

// ===============================
// PRODUÇÃO
// ===============================
async function baixarEstoque(ingredientesConsumidos) {
    for (let id in ingredientesConsumidos) {
        const ing = ingredientesConsumidos[id];

        const doc = await db.collection("estoque").doc(id).get();
        const atual = doc.data().quantidade;

        await db.collection("estoque").doc(id).update({
            quantidade: atual - ing.quantidade
        });
    }
}

// ===============================
// FINANCEIRO
// ===============================
function registrarFinanceiro(tipo, receita, custo, lucro) {
    return db.collection("financeiro").add({
        tipo,
        receita,
        custo,
        lucro,
        data: new Date().toISOString().split("T")[0]
    });
}
