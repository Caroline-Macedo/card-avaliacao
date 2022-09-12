var body = document.querySelector("body")
var mainScreen = document.querySelector(".main-screen");
var secundaryScreen = document.querySelector(".secundary-screen");
var button = document.querySelector(".btn-enviar");
var listaOrdenada = document.querySelector("ol");
var resposta = document.querySelector(".resposta");

HabilitarDesabilitarButton(true);

button.addEventListener("click", trocarDeTela);

body.addEventListener("click", desativaEnviarClique)

listaOrdenada.addEventListener("click", validaButton);

function HabilitarDesabilitarButton(estado){
    button.disabled = estado;
}

function trocarDeTela(){
    secundaryScreen.classList.remove("escondido");
    mainScreen.classList.add("escondido");
};

function pegaClique(clique){
    return clique.target;
};

function validaButton(clique){ 

    if (pegaClique(clique).localName == "button"){
        var textoBtn = pegaClique(clique).textContent;
        resposta.textContent = textoBtn;
        HabilitarDesabilitarButton(false);
    };
};

function desativaEnviarClique(clique){

    if(pegaClique (clique).localName != "button"){
        HabilitarDesabilitarButton(true);
    };
};









// listaOrdenada.addEventListener("click", (clique)=>{
    
//    var itemClicado = pegaClique(clique.target) ;
//     // var itemClicado = clique.target;
//     // if(itemClicado.localName == "button"){
//     //     var textoBtn = itemClicado.textContent
//     //     resposta.textContent = textoBtn
//     //     button.disabled = false;
//     // }
    
// });
// body.addEventListener("click", (clique)=>{
//     var itemClicado = clique.target;
//     if(itemClicado.localName != "button"){
//         button.disabled = true
//     }
    
// });