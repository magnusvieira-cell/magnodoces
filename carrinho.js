let carrinho = [];

const produtos = [
    { nome: "Bolo Chocolate", preco: 12, foto: "img/bolo.jpg" },
    { nome: "Bolo Ninho", preco: 12, foto: "img/ninho.jpg" }
];

const catalogo = document.getElementById("catalogo");

produtos.forEach(p => {
    catalogo.innerHTML += `
        <div>
            <img src="${p.foto}" width="150">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}</p>
            <button onclick="add('${p.nome}', ${p.preco})">Adicionar</button>
        </div>`;
});

function add(nome, preco) {
    carrinho.push({ nome, preco });
    atualizar();
}

function atualizar() {
    const c = document.getElementById("carrinho");
    c.innerHTML = "";

    carrinho.forEach(i => {
        c.innerHTML += `<p>${i.nome} — R$ ${i.preco}</p>`;
    });
}

function finalizarPedido() {
    window.location.href = "pedido.html";
}
