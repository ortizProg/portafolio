class Trabajo {

    constructor({
        name,
        empresa,
        descripcion,
        imagenUrl
    }) {

        this.id = trabajosPortafolio.length + 1;
        this.name = name;
        this.empresa = empresa;
        this.descripcion = descripcion;
        this._imagenUrl = imagenUrl;

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
            <div class="portafolio-item--imagen_container">
                <img src="${this.imagenUrl}" class="portafolio-item--imagen" /> 
            </div>
            <div class="portafolio-item--button_container">
                <button class="portafolio-item--button" id="button_${this.id}">
                    Ver Proyecto
                </button>
            </div>
        </div>
        `;

        containerPortafolio.insertAdjacentHTML("beforeend", estructura);

    }
    get imagenUrl() {

        return this._imagenUrl;

    }

    set imagenUrl(newImagenUrl) {

        return this._imagenUrl = newImagenUrl;

    }

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

