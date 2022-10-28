const carrousel = document.querySelector("#carrousel");
let carrouselCard = document.querySelectorAll(".carrouselCard");
let carrouselCardUltimo = carrouselCard[carrouselCard.length - 1];
const btnDerecha = document.querySelector("#btnDerecha");
const btnIzquierda = document.querySelector("#btnIzquierda");

carrousel.insertAdjacentElement("afterbegin", carrouselCardUltimo);

let moverDerecha = () => {
    let carrouselCardPrimero = document.querySelectorAll(".carrouselCard")[0];
    carrousel.style.marginLeft = "-200%";
    carrousel.style.transition = "all 0.5s";
    setTimeout(() => {
        carrousel.style.transition = "none";
        carrousel.insertAdjacentElement("beforeend", carrouselCardPrimero);
        carrousel.style.marginLeft = "-100%";
    }, 500);
};

btnDerecha.addEventListener("click", () => {
    moverDerecha();
});

let moverIzquierda = () => {
    let carrouselCard = document.querySelectorAll(".carrouselCard");
    let carrouselCardUltimo = carrouselCard[carrouselCard.length - 1];
    carrousel.style.marginLeft = "0%";
    carrousel.style.transition = "all 0.5s";
    setTimeout(() => {
        carrousel.style.transition = "none";
        carrousel.insertAdjacentElement("afterbegin", carrouselCardUltimo);
        carrousel.style.marginLeft = "-100%";
    }, 500);
};
btnIzquierda.addEventListener("click", () => {
    moverIzquierda();
});
