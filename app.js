function criaCartao (categoria, pergunta, respota){
 let container = document.getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'
cartao.innerHTML =`
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é JS</p>?
                    </div>
                    <div class="cartao__conteudo__resposta">
                    <p>Linguagem de Programação</p>
                    </div>
                    </div>
                    `
                    container.appendChild(cartao)
}