document.addEventListener('DOMContentLoaded',quadrante)
document.addEventListener('DOMContentLoaded',jogadores)

function jogadores(){
    let players = document.querySelectorAll(".player")
    players.forEach((indice) => {
        indice.addEventListener('click',playerEscolhido)
    });
}

function playerEscolhido(event){
    let playerSelecionado = event.target
    jogadorEscolhido(playerSelecionado.id)
}

//esse trecho garante que o codigo foi devidamente carregado no documento


//essa função percorre todos os ids presentes no tabuleiro
function quadrante(){
    let quadrante = document.querySelectorAll(".quadrante")
    quadrante.forEach((indice) => {
        indice.addEventListener('click',cliclado)
    });
}

/*
essa função verifica qual foi o quadrante clicado e passa a posição desse quadrante 
para a função jogada
*/
function cliclado(event){
    
    let quadrante = event.target
    let posicao = quadrante.id
    if(jogada(posicao)== true){

        setTimeout(()=>{
            atualizaQuadrante()
            alert("fim de jogo")
            
        },500)
       
    }
    atualizaQuadrante()
}

/*
    essa função pega o conteudo presente no array e passa novamente para o 
    quadrante
*/ 
function atualizaQuadrante(){
    let quadrante = document.querySelectorAll(".quadrante")

    quadrante.forEach((indice) => {
        
        let posicao = indice.id
        let simbolo = tabuleiro[posicao]
        
        if(simbolo != ''){

            
            indice.innerHTML=`<div class='${simbolo}'></div>`

        }

    });

}


