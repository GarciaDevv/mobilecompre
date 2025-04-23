let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function Comprar(nome, preco) {
    let item = carrinho.find(item => item.nome === nome);
    if (item) {
        item.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function calcularTotal() {
    let total = 0;
    for (let item of carrinho) {
        total += item.preco * item.quantidade;
    }
    return total.toFixed(2);                                                                                                                           /* converte o valor total em ponto flutuante*/
}




function exibirCarrinho() {
    let divCarrinho = document.getElementById('carrinho');
    divCarrinho.innerHTML = '';

                                                                                                                                                                  /* editar como aparece no carrinho*/
    let mapeamentoTexto = {
        'Maçã': 'Pct. Preço Por Pct',
        'Banana prata': 'Dz. Preço Por Kg',
        'Arroz Integral': 'Pacote 5Kg',
        'Carne costelinha suína': 'Kg',
        'Morango': 'Cxs. Preço Por Caixa',
        'Melancia': 'Un. Preço Por Kg',
        'Uva Verde': 'Cxs. Preço Por Caixa',
        'Laranja': 'Un. Preço Por Kg',
        'Manga': 'Un. Preço Por Kg',
        'Frango SuperFrango': 'Pct. Preço Por Kg',
        'Steak de Frango': 'Un. Preço Por Unidade',
        'Nuggets Tradicional': 'Cxs. Preço Por Caixa',
        'Lasanha de Frango': 'Cxs. Preço Por Caixa',
        'Bolo Chocolate': 'Un. Preço Por Unidade',
        'Pão Tradicional': 'Pct. Preço Por Unidade',
        'Pão de Queijo': 'Un. Preço Por Kg',
        'Filézinho Frango': 'Un. Preço Por Kg',
        'Peixe Tilapía': 'Un. Preço Por Kg',
        'Linguiça Tosc': 'Un. Preço Por Kg',
        'Bacon Fatiado': 'Un. Preço Por Kg',
        'Coxas de Frango': 'Un. Preço Por Kg',
        'Filé Mignon': 'Un. Preço Por Kg',
        'Almondegas': 'Un. Preço Por Kg',


       
        
        
       
    };

    

// Função para voltar à página anterior
function voltar() {
    window.history.back();
  }
  
  // Seleciona o botão pelo ID e adiciona o evento de clique
  const btnVoltar = document.getElementById('btnVoltar');
  if (btnVoltar) {
    btnVoltar.addEventListener('click', voltar);
  } else {
    console.error("Botão com ID 'btnVoltar' não encontrado.");
  }

    for (let item of carrinho) {
        let p = document.createElement('p');
        p.className = 'texto-carrinho';  

        
        let textoItem = mapeamentoTexto[item.nome] || ''

        p.textContent = `${item.nome}: ${item.quantidade} ${textoItem} ${item.preco} R$ .`;
        divCarrinho.appendChild(p);
    }
    divCarrinho.innerHTML += '<br>'

    let pTotal = document.createElement('p');
    pTotal.className = 'texto-carrinho';  
    pTotal.textContent =  `Total Da Compra: ${calcularTotal()} R$`;
    divCarrinho.appendChild(pTotal);
}



                                                                                                                                                                             // botao pra limpar o carrinho// 

function limparCarrinho() {
    carrinho = [];
    localStorage.removeItem('carrinho');
    exibirCarrinho();
}

let btnLimpar = document.getElementById('btnLimpar');
btnLimpar.addEventListener('click', limparCarrinho);





window.onload = exibirCarrinho;