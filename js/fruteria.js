var cantidad = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var kilos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var frutas = ['sandia', 'naranja', 'melocotones', 'mandarina', 'manzana', 'platano', 'cerezas', 'kiwi', 'fresa', 'piña'];
function añadir(frutas1){
    var i;
    for(i = 0; i < frutas.length;i++){
        if(frutas[i] == frutas1){
            cantidad[i]+=1;
            kilos[i]+=1;
            break;
        }
    }
}

function muestra(){
    
}

class Frutas{
    constructor(kilos, precio, nombre){
        this.kilos = kilos;
        this.precio = precio;
        this.nombre = nombre;
    }
}

class FrutasVerano extends Frutas{
    constructor(kilos, precio, nombre, proximidad, region){
        super(kilos, precio, nombre);
        this.proximidad = proximidad;
        this.region = region;
    }
}

class FrutasInvierno extends Frutas{
    constructor(kilos, precio, nombre, conservar){
        super(kilos, precio, nombre);
        this.conservar = conservar;
    }
}