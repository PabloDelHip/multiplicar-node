const fs = require('fs');
var colors = require('colors');

//se crear la funcion, con una promesa, la cual el resolve es en caso de que se realice todo correctamente y el reject  si hay un error
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            //si el valor no es numerico se regresa un error
            reject('El valor introducido no es un numero');
            return;
        }
        let data = '';


        for (let i = 1; i <= limite; i++) {
            data += base + '*' + i + "=" + (base * i) + '\n';
        }
        //hacemos uso de la libreria, la cual recibe:
        /*Donde se guarda el archivo, los datos que tendra el archivo y el callback, para el erro */
        fs.writeFile('tablas/tabla-' + base + '.txt', data, (err) => {
            if (err) reject(err)
            else
                resolve('tabla' + base + '.txt'); //si todo sale correctamente se retorna el resolve con el mensaje
        });
    });
}

let listarTabla = (base, limite = 10) => {


    for (let i = 1; i <= limite; i++) {
        console.log(base + '*' + i + "=" + (base * i));
    }
}

//para poder exportar funciones y se puedan usar en otros archivos se hace de esta manera
module.exports = {
    crearArchivo,
    listarTabla
}