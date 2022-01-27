class Trabajo {

    constructor({
        name,
        empresa,
        descripcion = "",
        imagenUrl,
        urlPagina = "#"
    }) {

        this.id = trabajosPortafolio.length + 1;
        this.name = name;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this._imagenUrl = imagenUrl;
        this.urlPagina = urlPagina;

    }
    imprimir = () => {

        const containerPortafolio = document.getElementById('containerPortafolio');

        const estructura = `
        <div class="portafolio--item" id="trabajo_${this.id}">
            <div class="portafolio-item--title_container">
                <h4 class="portafolio-item--title">
                    ${this.name}
                </h4>
            </div>
            <div class="portafolio-item--imagen_container" style="background-image: url('${this.imagenUrl}');"></div>
            <div class="portafolio-item--button_container">
                <button class="portafolio-item--button" id="button_${this.id}">
                    Ver Proyecto
                </button>
            </div>
        </div>
        `;

        containerPortafolio.insertAdjacentHTML("beforeend", estructura);

    };
    ventanaFlotante = () => {
        
        const containerVentanaFlotante = document.querySelector(".ventanaFlotante__container");

        const estructura = `
            <p class="ventanaFlotante__cierre">X</p>
            <div class="ventanaFlotante__right">
                <div class="ventanaFlotante__bg" style="background-image: url('${this.imagenUrl}')"></div>
            </div>
            <div class="ventanaFlotante__left">
                <h2 class="ventanaFlotante__title">${this.name}</h2>
                <p class=" ventanaFlotante__descript">${this.descripcion}</p>
                <div class="ventanaFlotante__container-button">
                    <a href="${this.urlPagina}" target="_blank" class="button--visita">¡Visitar!</a>
                </div>
            </div>
        `; 

        containerVentanaFlotante.insertAdjacentHTML("beforeend", estructura);

    };
    get imagenUrl() {

        return this._imagenUrl;

    };
    set imagenUrl(newImagenUrl) {

        return this._imagenUrl = newImagenUrl;

    };

}

// function para imprimir todas los trabajos

function imprimirTrabajos() {

    trabajosPortafolio.forEach(item => item.imprimir());

}


// crear lista 

const trabajosPortafolio = [];

// Agregar valores a la lista 

trabajosPortafolio.push(

    new Trabajo({
        name: "Clon de Youtube",
        imagenUrl: "https://lh3.googleusercontent.com/fife/AAWUweV4anUwkXbUerLnX_R_7yixJqtFvazFBwgoeetwcgSt7iIDWGEV3ipp6UBQ_FWvIZnvHcpd32pXEFuwyr5A9rUnO1QWeZF0ZS9vMB2b52cIn_-PcZBx-LWB-VbLqzsOe3PWL05UpyQ_rWDg-WXZbUhC32UXeQZeXOY8hivtuLZT4mM2mK5wDo1Gw6NPxCFIZ4KhkbyXJbDVHuyJXyt98KZXwdBha9s8znC1zxVe4dT99w9FSDsn2j4z2cnotnLZHojcHehLmSSiYb417sAKT1pkAoHaZirZnzs_apxjnKsomqJBk0PHKXo0zcUEkSf_qrm2Q5s6jOK2bK2socaBbliMYvHtj8LdHFxLnpGifL6_pYRWprrStdr1rvqKhvxsLZCanLZmtV95kygn-jFr5X7moGDzjvpNNWif85BEH3XLnxPLrIDN0f8WtbQuprJGSu5UiWiAYJ_wXFDmPg3N8MIz84AEfncD-bGdrd_C0ndVWYt9MXS8zkxFGP9QZO9o6Yv4L8zGiHgwWq920sKyT9Y-s6l1Eop6HRV3fUM3KSL7EdMMCfkkS7V1eGrhHF_ZZZzkDQHPHA8rlS5MetP_7urFIahCXSD0o2W4tcSG_QlXiIMqI-c622Dtbams4PijhtmBRQ0v04DZstBU5wkii4K-Z-1LRga3Kvyq6dAU8qmCEMRZ-E7gcPS_QpIb_I8OPDbl8ahUt3wHvLTP6ltamq9dAbNzDWpIDQ=w811-h680-ft",
        descripcion: "Proyecto realizado en el curso practico de HTML y CSS."
    })

);
trabajosPortafolio.push(

    new Trabajo({
        name: "Netflix MS",
        imagenUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",

    })

);
trabajosPortafolio.push(

    new Trabajo({
        name: "prueba",
        imagenUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",

    })

);
trabajosPortafolio.push(

    new Trabajo({
        name: "prueba",
        imagenUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",

    })

);
trabajosPortafolio.push(

    new Trabajo({
        name: "prueba",
        imagenUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",

    })

);
trabajosPortafolio.push(

    new Trabajo({
        name: "prueba",
        imagenUrl: "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",

    })

);

imprimirTrabajos();

const buttons = document.querySelectorAll('.portafolio-item--button');

buttons.forEach((button, iteracion) => {

    button.addEventListener("click", () => {

        const main = document.querySelector('main');
        const ventanaFlotante = document.createElement('div');
        ventanaFlotante.setAttribute('class', 'ventanaFlotante__container');
        main.prepend(ventanaFlotante);
        
        function frames() {

            const animation = ventanaFlotante.animate([
                {clipPath: "circle(0% at 0 100%)"},
                {clipPath: "circle(142.2% at 0 100%)"}
            ], {

                
                iterations: "1",
                duration: 500
            });
    
            return animation.finished;
            
        }

        frames();

        ventanaFlotante.style.clipPath = "circle(142.2% at 0 100%)";

        
        

        trabajosPortafolio[iteracion].ventanaFlotante();


        const buttonCierre = document.querySelector('.ventanaFlotante__cierre');

        buttonCierre.addEventListener("click", () => {

            const containerVentanaFlotante = document.querySelector(".ventanaFlotante__container");

            function frames() {

                const animation = ventanaFlotante.animate([
                    {clipPath: "circle(142.2% at 0 100%)"},
                    {clipPath: "circle(0% at 0 100%)"},
                ], {
    
                    iterations: "1",
                    duration: 500
                });
        

                return animation.finished;
                
            }
    
            frames();

            ventanaFlotante.style.clipPath = "circle(0% at 0 100%)";

            setTimeout( () => {

                containerVentanaFlotante.remove();

            }, 600);

        });
    
    });


});


