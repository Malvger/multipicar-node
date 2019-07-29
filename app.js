//requires
const { crearAchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => {
                console.log('========================'.green);
                console.log(`======Tabla de ${argv.base}=======`.green);
                console.log('========================'.green);
                console.log(resp.red);
            })
            .catch(e => console.log(e))

        break;
    case 'crear':
        crearAchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}