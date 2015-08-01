window.onload = function() {
	game();
}

var pontos = 0;

function game() {
    var correto = false;

    var possibilidades = [
        {nome: "VERDE", cor: "#32CD32"},
        {nome: "VERMELHO", cor: "#EE2C2C"},
        {nome: "AZUL", cor: "#009ACD"},
        {nome: "AMARELO", cor: "#EEEE00"},
        {nome: "ROXO", cor: "#B452CD"},
        {nome: "PINK", cor: "#FF1493"},
        {nome: "LARANJA", cor: "#FF8C00"},
        {nome: "CINZA", cor: "#696969"},
        {nome: "MARROM", cor: "#8B4513"},
    ];

    var cor = possibilidades[Math.floor(Math.random() * possibilidades.length)];
    var nomeCor = possibilidades[Math.floor(Math.random() * possibilidades.length)].nome;

    if(pontos < 4) {
        duracao = 2000;
    } else if(pontos < 8) {
        duracao = 1500;
    } 

    var circle = new ProgressBar.Circle('#circulo', {
        color: cor.cor,
        strokeWidth: 5,
        duration: duracao,
        text: {
            value: nomeCor,
            color: cor.cor
        },
        
    });

    circle.animate(1, function() {
        perder();
    })
	
	document.getElementById("pontos").innerHTML = pontos;

	if(cor.nome == nomeCor) {
		correto = true;
	}

	document.getElementById("correto").onclick = function() {
		if(correto) {
            vencer();
            circle.destroy();
		} else {
			perder();
            circle.stop();
		}	
	}
	document.getElementById("errado").onclick = function() {
		if(!correto) {
            vencer();
            circle.destroy();
		} else {
			perder();
            circle.stop();
		}
	}
}

function perder() {
	pontos = 0;
	document.getElementById("perdeu").style.display = "block";
	document.getElementById("exibir").style.display = "none";
}

function vencer() {
    pontos ++;
    game();
}


