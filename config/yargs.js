const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//hacemos la configuracion para los comando que se usaran en consola
//primero se coloca comand y la manera en la que se llamara en este caso es listar
//seguido de una descripcion de lo que hace
//dentro va la configuracion
//la base, donde se indica que es obligatoria (demand) y su alias que es b (-b)
//abajo se pone otro parametro el cual es limite, con un valor por defecto de 10 en caso de no pasarle un valor
//la forma de llamarlo es node app listar --limite=20 -b 50
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv; //cuando no lleva diagonal es por que se esta llamando a un paquete, no un archivo


module.exports = {
    argv
}