function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>weak hero class ask</h3>
    <div class="cartao__conteudo__pergunta">
    <p>Por que Yeon Si Eun e Yeong-bin tinham rivalidade? </p>
    </div>
    <div class="cartao__conteudo__resposta">
    <p>A rivalidade entre Yeon Si-eun e Jeon Yeong-bin surgiu porque Yeong-bin se sentiu humilhado ao ser superado por Si-eun em uma competição de matemática.  </p>
    </div>
    </div>  
    `
    container.appendChild(cartao)
}
