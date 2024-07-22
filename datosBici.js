const fs= require('fs');

const rutaBiciletas = "./bicicletas.json";
let leerBicis = fs.readFileSync(rutaBiciletas, 'utf-8');
let datosBici = JSON.parse(leerBicis);


module.exports = datosBici;