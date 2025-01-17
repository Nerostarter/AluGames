let JogosAlugadosNum = 1;
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    if (botao.className === "dashboard__item__button") {
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
        JogosAlugadosNum++;
        JogosAlugados();
    }else{
        let resposta =  confirm("Você quer devolver esse jogo?");
        if(resposta) {
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            imagem.classList.remove("dashboard__item__img--rented");
            JogosAlugadosNum = JogosAlugadosNum - 1;
            JogosAlugados();
        }
        
    }

}
function JogosAlugados(){
    console.log(JogosAlugadosNum);
}
JogosAlugados();