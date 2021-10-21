function processa(id){
    let espaço = document.getElementById(id)
    let jogador = document.getElementById("iconJogador")
    let tabuleiro = document.getElementById("tabuleiro")
    let qtdJogadas = Number(tabuleiro.getAttribute("qtdJogadas"))
    qtdJogadas += 1

    if (espaço.getAttribute("jogada") == ""){
        let imgJogador = document.createElement("img")
        imgJogador.setAttribute("src", jogador.src)
        imgJogador.setAttribute("width", 70)
        espaço.setAttribute("jogada", jogador.getAttribute("src") == "images/xis.png" ? "X":"O")
        espaço.appendChild(imgJogador)
        tabuleiro.setAttribute("qtdJogadas", qtdJogadas)

        if(confereVitoria()){
            alert("O jogador " + espaço.getAttribute("jogada") + " venceu!!")
            location.reload()
        }else if (qtdJogadas == 9){
            alert("Parece que deu velha!!")
            location.reload()
        }
        else jogador.setAttribute("src", jogador.getAttribute("src") == "images/xis.png" ? "images/bolinha.png":"images/xis.png")
    }
}

function confereVitoria(){ //melhorar futuramente
    var espaços = document.getElementsByClassName("espaço")
    
    if ((espaços[0].getAttribute("jogada") == espaços[1].getAttribute("jogada")) && (espaços[0].getAttribute("jogada") == espaços[2].getAttribute("jogada")) && (espaços[0].getAttribute("jogada") != "")) return true
    else if ((espaços[3].getAttribute("jogada") == espaços[4].getAttribute("jogada")) && (espaços[3].getAttribute("jogada") == espaços[5].getAttribute("jogada")) && (espaços[3].getAttribute("jogada") != "")) return true
    else if ((espaços[6].getAttribute("jogada") == espaços[7].getAttribute("jogada")) && (espaços[6].getAttribute("jogada") == espaços[8].getAttribute("jogada")) && (espaços[6].getAttribute("jogada") != "")) return true

    else if ((espaços[0].getAttribute("jogada") == espaços[3].getAttribute("jogada")) && (espaços[0].getAttribute("jogada") == espaços[6].getAttribute("jogada")) && (espaços[0].getAttribute("jogada") != "")) return true
    else if ((espaços[1].getAttribute("jogada") == espaços[4].getAttribute("jogada")) && (espaços[1].getAttribute("jogada") == espaços[7].getAttribute("jogada")) && (espaços[1].getAttribute("jogada") != "")) return true
    else if ((espaços[2].getAttribute("jogada") == espaços[5].getAttribute("jogada")) && (espaços[2].getAttribute("jogada") == espaços[8].getAttribute("jogada")) && (espaços[2].getAttribute("jogada") != "")) return true

    else if ((espaços[0].getAttribute("jogada") == espaços[4].getAttribute("jogada")) && (espaços[0].getAttribute("jogada") == espaços[8].getAttribute("jogada")) && (espaços[0].getAttribute("jogada") != "")) return true
    else if ((espaços[6].getAttribute("jogada") == espaços[4].getAttribute("jogada")) && (espaços[6].getAttribute("jogada") == espaços[2].getAttribute("jogada")) && (espaços[6].getAttribute("jogada") != "")) return true
    
    else return false
}