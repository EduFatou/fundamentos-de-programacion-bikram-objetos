const Coche = {
    marca: 'audi',
    modelo: 'a7',
    matricula: '3456fly',
};

const Casa = {
    codPostal: 41930,
    calle: 'Petunias',
    portal: 5,
    piso: 1,
};

const FullStackDeveloper = {
    lenguajes: ['JS', 'HTML', 'CSS'],
    proyectos: ['personal', 'grupal'],
};

const Perro = {
    nombre: 'Toby',
    raza: 'Labrador',
    color: 'amarillo',
    edad: 11,
    ladrar: function(){
        console.log('guauu!');
    },
    popo: function(){
        return Math.random()*3;
    },
};



const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil['marca'];
const grupos = Concierto.grupos;
const RGB = [Led.rojo, Led.verde, Led.azul];
Portatil.modelo = 'P345';
Concierto.cartelera.push(`Guns N' Roses`);
Concierto.fecha = new Date();
Impresora.imprimiendo = {
    nombreArchivo: 'hola',
    copias: 1,
    numPaginas: 1,
};

Noticia = {
    titular: 'JS Mola',
    cuerpo: 'The Bridge lo confirma',
};

Persona = {
    nombre: 'Edu',
    apellidos: 'Fatou Cerrato',
    edad: 35,
};

Avion = {
    numPasajeros: 50,
    despegar: function(){
        console.log('despegando');
    },
    volar: function(){
        console.log('llegando al destino');
    },
    aterrizar: function(){
        console.log('aterrizando');
    },
};

Paquete = {
    contenido: ['muchas cosas'],
};

Pais = {
    numHabitantes: 48000000,
    continente: 'Europa',
    gentilicio: 'Españoles',
};

let codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil['especificaciones'];

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';

if (Led.encendido){
    Led.encendido = false;
} else {
    Led.encendido = true;
}

Movil.temperatura = '20º';