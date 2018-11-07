//requireds
/* los required siempre se colocan en la parte de arriba y en este caso
estamos llamando una libreria que ya pertenece a node (se puede ver en
    la documentacion) y es para generar archivos*/
// const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //se llama a la funcion del archivo multiplicar
// let base = 'abc';

// let data = '';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado'))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


// for (let i = 1; i <= 10; i++) {
//     data += base + '*' + i + "=" + (base * i) + '\n';
// }
// //hacemos uso de la libreria, la cual recibe:
// /*Donde se guarda el archivo, los datos que tendra el archivo y el callback, para el erro */
// fs.writeFile('tablas/tabla-' + base + '.txt', data, (err) => {
//     if (err) throw err; //si hay un error va a mostrar cual es el problema
//     console.log('El archivo a sido creado'); //si no hay error guarda el archivo
// });

// console.log('Limite', argv.limite);
//de esta manera se reciben parametros mediante la consola
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//esta es la manera de poner un comando en consola para mandar parametros
// node app--base = 11

//se utiliza la funcion y no se muestra el mensaje hasta que se termine de realizar lo declarado en la funcion
// crearArchivo(base)
//     .then(archivo => console.log('Archivo creado'))
//     .catch(e => console.log(e));
//then es para que muestre un mensaje en caso de que sea correcto y el catch es para los errores