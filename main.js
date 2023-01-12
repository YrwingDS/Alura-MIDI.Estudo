
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


function tocaSom(seletorAudio){
     const elemento = document.querySelector(seletorAudio);
     if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
     }
     else{
        console.log('Elemento não encontrado ou seletor inválido');
     }
}

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const listaDeSons = tecla.classList[1];
    const idAudio = `#som_${listaDeSons}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        };
    }

    tecla.onkeyup = function(evento){
        if(evento.code === 'Space' || evento.code ===  'Enter'){
            tecla.classList.remove('ativa');
        };
    }
}



