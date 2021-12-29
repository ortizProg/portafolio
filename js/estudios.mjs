//Creacion de las clases

class Estudios {

    constructor(name, imagenUrl, institucion) {

        this.name = name;
        this._imagenUrl = imagenUrl;
        this.institucion = institucion;

    }
    get imagen() {

        return this._imagenUrl;

    };
    set imagen(newImg) {

        return this._imagenUrl = newImg;

    };
    imprimir = () => {

        const tituloContainer = document.getElementById('titulosContainer');
        const estructura = `
            <div class="estudios--item" id="${this.id}">
                <p class="estudios-item--name"><a href="${this._imagenUrl} target="_blank">${this.name}</a></p>
                <p class="estudios-item--institucion">Graduado del ${this.institucion}</p>
            </div>`;

            tituloContainer.insertAdjacentHTML("beforeend", estructura);
        
    }

}

class Titulo extends Estudios{

    constructor({
        name: name,
        imagenUrl: imagenUrl = "#",
        institucion: institucion
    }) {

        super(name, imagenUrl, institucion);
        this.id = `titulo_${titulos.length + 1}`;
        
    }
}

class Course extends Estudios {

    
    constructor({
        name: name,
        imagenUrl: imagenUrl = "#",
        institucion: institucion
    }) {
        
        super(name, imagenUrl, institucion);
        this.id = `course_${cursos.length + 1}`;

    }
    imprimir = () => {

        const coursesContainer = document.getElementById('coursesContainer');
        const estructura = `
            <div class="estudios--item" id="${this.id}">
                <p class="estudios-item--name"><a href="${this._imagenUrl}" target="_blank">${this.name}</a></p>
                <p class="estudios-item--institucion">Otorgado por ${this.institucion}</p>
            </div>`;

            coursesContainer.insertAdjacentHTML("beforeend", estructura);
        
    }

}

// functiones

function imprimirTitulos() {

    titulos.forEach(item => item.imprimir());

}

function imprimirCursos() {

    cursos.forEach(item => item.imprimir());

}

// declarar listas

const titulos = [];

const cursos = [];

// agregar titulos

titulos.push(
    new Titulo({
        name: "Tecnico En Diseño Y Desarrollo De Sitios Web",
        institucion: "Instituto Tecnico Superior De Pereira"
    })
);

// agregar Cursos

cursos.push(
    new Course({
        name: "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1HKSYjL949tJ1QJEwvxH-OnVypxI2tV7B/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso Profesional de Git y GitHub",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/10amMml7CmTP_xhpf7kZIDpLw087VF4t1/view?usp=sharing",
    })
);
cursos.push(
    new Course({
        name: "Curso Definitivo de HTML y CSS",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1CNmeQqvAPonfGCq6991RhMzkLx6NAcEq/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso Práctico de HTML y CSS",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1VEnoBHyJ_5NH3GBP0EC1rsb8kAab892v/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso de Resposive Design: Maquetación Mobile First",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1Yyi_XBM3tn0KPcyjcFxRt9gQCwdne1TI/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso Básico de JavaScript",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1IdLINjnlNHWZOLtozi0r7M8lwR0Fz7OP/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso Práctico de JavaScript",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1gpxRqe42cKv2mHY4703LzMYLGcjuxNVX/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso de Closures y Scope en JavaScript",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/14wEZSGg0Rc6D5NG8lMIbCXhg4kFwKhk0/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso de Programación Orientada a Objetos: POO",
        institucion: "Platzi",
    })
);
cursos.push(
    new Course({
        name: "Curso Básico de Programación Orientada a Objetos con JavaScript",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1vlIfdRQhjqO4YFiUYLYSIYmE3vFcZ4hs/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso Intermedio de Programación Orientada a Objetos en JavaScript",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1EqGcprs4Klq-j1JUejdEDy4Muy60rLYt/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso de ECMAScript 6+",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1T34GYKVAX12ZhKzJ9di05mdqVPUbyfYr/view?usp=sharing"
    })
);
cursos.push(
    new Course({
        name: "Curso de Manipulación de Arrays en JavaScript",
        institucion: "Platzi",
        imagenUrl: "https://drive.google.com/file/d/1RwJgoAWVCQmqtdFy4R3t3jDWjhu1w0CF/view?usp=sharing"
    })
);


// Enviar los titulos y cursos al DOM

const estudiosContainer = document.getElementById('estudiosContainer');


imprimirTitulos();
imprimirCursos();