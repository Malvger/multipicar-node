//requires
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolver, reject) => {
        if (!Number(base)) {
            reject(`El Valor introducido ${base} no es un numero `);
            return;
        }
        if (!Number(limite)) {
            reject(`El Valor introducido ${limite} no es un numero `);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        resolver(data);
    });
}

let crearAchivo = (base, limite = 10) => {
    return new Promise((resolver, reject) => {
        if (!Number(base)) {
            reject(`El Valor introducido ${base} no es un numero `);
            return;
        }
        if (!Number(limite)) {
            reject(`El Valor introducido ${limite} no es un numero `);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolver(`table-${base}.txt`);
        });
    });
}

module.exports = {
    crearAchivo,
    listarTabla
}