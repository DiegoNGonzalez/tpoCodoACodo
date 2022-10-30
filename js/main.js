const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const errorNombre = document.querySelector("#errorNombre");
const errorMail = document.querySelector("#errorMail");

//alert custom sweet alert
const alerta = () => {
    Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "Formulario Enviado!",
        showConfirmButton: false,
        timer: 1500,
    });
};
const alertaFormIncompleto = () => {
    Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Verifique los datos ingresados",
        showConfirmButton: false,
        timer: 1500,
    });
};
const validarNombre = () => {
    let name = inputNombre.value;

    if (name.length == 0) {
        errorNombre.innerHTML = "Ingrese nombre";
        alertaFormIncompleto();
    }
    if (!name.match(/^[a-zA-ZÀ-ÿ\s]{2,40}$/)) {
        errorNombre.innerHTML = "Ingrese nombre completo";
        alertaFormIncompleto();
    }
};
const validarMail = () => {
        let email = inputEmail.value;

        if (email.length == 0) {
            errorMail.innerHTML = "Ingrese Email";
            alertaFormIncompleto();
        }
        if (
            !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/)
        ) {
            errorMail.innerHTML = "Email no valido";
            alertaFormIncompleto();
        }
    }

// consumo api formspree
formulario.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    validarNombre();
    validarMail();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            Accept: "application/json",
        },
    });
    if (response.ok) {
        this.reset();
        alerta();
    }
}

//menu hamburguesa
const iconoMenu = document.querySelector("#btn-menu"),
    menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e) => {
    // Alternamos estilos para el menu y body
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");
});

//carrousel
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
setInterval(() => {
    moverDerecha();
}, 3000);
