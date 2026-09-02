// ===============================
// CONFIGURAÇÃO DO FIREBASE
// ===============================
var firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

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
            window.location.href = "dashboard.html?v=120";
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
        window.location.href = "index.html?v=120";
    });
}

// ===============================
// CADASTRO DE USUÁRIO (OPCIONAL)
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
// FUNÇÕES GERAIS DO SISTEMA
// ===============================

// Salvar ingrediente no estoque
function salvarIngrediente(nome, medida, quantidade, custo) {
    return db.collection("estoque").add({
        nome,
        medida,
        quantidade,
        custo
    });
}

// Atualizar ingrediente
function atualizarIngrediente(id, dados) {
    return db.collection("estoque").doc(id).update(dados);
}

// Remover ingrediente
function removerIngrediente(id) {
    return db.collection("estoque").doc(id).delete();
}

// ===============================
// PRODUTOS FINAIS
// ===============================

// Salvar produto final
function salvarProdutoFinal(dados) {
    return db.collection("produtosFinais").add(dados);
}

// Atualizar produto final
function atualizarProdutoFinal(id, dados) {
    return db.collection("produtosFinais").doc(id).update(dados);
}

// Remover produto final
function removerProdutoFinal(id) {
    return db.collection("produtosFinais").doc(id).delete();
}

// ===============================
// PEDIDOS
// ===============================

// Criar pedido
function salvarPedido(dados) {
    return db.collection("pedidos").add(dados);
}

// Atualizar pedido
function atualizarPedido(id, dados) {
    return db.collection("pedidos").doc(id).update(dados);
}

// Remover pedido
function removerPedido(id) {
    return db.collection("pedidos").doc(id).delete();
}

// ===============================
// PRODUÇÃO
// ===============================

// Baixa automática no estoque
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

// Registrar movimentação financeira
function registrarFinanceiro(tipo, receita, custo, lucro) {
    return db.collection("financeiro").add({
        tipo,
        receita,
        custo,
        lucro,
        data: new Date().toISOString().split("T")[0]
    });
}
