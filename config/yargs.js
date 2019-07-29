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
const argv = require('yargs')
    .command('listar', 'Imprime en cosola la tabla de multiplicar', opts)
    .command('crear', 'crea un archivo on la tabla de multiplicar', opts)
    .help()
    .argv

module.exports = {
    argv
}

// const argv = require('yargs')
//     .command('listar', 'Imprime en cosola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'crea un archivo on la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     }).help()
//     .argv