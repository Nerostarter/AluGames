function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    if (botao.className === "dashboard__item__button") {
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }else{
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    }

if(imagem.className === "dashboard__item__img") {
    imagem.classList.add("dashboard__item__img--rented");
}else{
    imagem.classList.remove("dashboard__item__img--rented");

}

}
