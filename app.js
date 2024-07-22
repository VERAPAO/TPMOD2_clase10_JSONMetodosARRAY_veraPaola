const bicicletas = require('./datosBici')

const dhBici = {
    bicicletas: bicicletas,
    buscarBici: function(id)  {
        let biciEncontrada = this.bicicletas.find((bici) => {
            return bici.id === id
         })
         
         if (biciEncontrada === undefined){
             return null
         }
         
         return biciEncontrada;
     
    },
    venderBici: function(id) {
      let biciBuscada = this.buscarBici(id)
      if(biciBuscada === null){
         return "Bicicleta no encontrada"
      }
      biciBuscada.vendida = "si";
      return biciBuscada
    },
    biciParaLaVenta: function () {
        let bicisParaVender = this.bicicletas.filter((bici) =>{
            return bici.vendida === "no";
        })
        return bicisParaVender;
    },

    listaDeVentas : function(){
        let arrVentas = this.bicicletas.filter((bici) => {
           return bici.vendida === "si"
        })
        let arrVentasIngresos = arrVentas.map((bici) =>{
           return bici.precio
        })
        return arrVentasIngresos
     },

    totalDeVentas: function(){
        let cantidadVentas = this.listaDeVentas().reduce((acum, precio) =>{
           return acum += precio
        },0) //se inicializa el contador en cero poniendo después de la llave }, 0 - la coma y el cero. Esto hace que en caso de que la lista sobre la que se realiza el reduce esté vacía (el array este vacio) no tire error
        return cantidadVentas
     },
     aumentoBici : function(porcentaje) {
        let bicicletasAumentadas = this.bicicletas.map(bici => {
            return {
                id: bici.id,
                marca: bici.marca,
                modelo: bici.modelo,
                rodado: bici.rodado,
                anio: bici.anio,
                color: bici.color,
                peso: bici.peso,
                tipo: bici.tipo,
                precio: bici.precio + (bici.precio * (porcentaje / 100)),
                vendida: bici.vendida
            };
        });

        return bicicletasAumentadas;
    },
    biciPorRodado: function(rodado) {
        // Utilizar filter para encontrar las bicicletas con el rodado especificado
        let bicisPorRodado = this.bicicletas.filter(bici => {
            return bici.rodado === rodado;
        });

        return bicisPorRodado;
    },
    listarTodasLasBici: function() {
        let todasLasBici = []
        this.bicicletas.forEach(bici => {
            return todasLasBici.push(bici)           
        });

        return todasLasBici;
    }
}



console.log(dhBici.buscarBici(2));
console.log(dhBici.venderBici(13));
console.log(dhBici.venderBici(3))
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas())
console.log(dhBici.aumentoBici(20))
let bicicletasRodado16 = dhBici.biciPorRodado(16);
console.log(bicicletasRodado16);
console.log(dhBici.listarTodasLasBici())