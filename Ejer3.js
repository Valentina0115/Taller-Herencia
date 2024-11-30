function Vehiculo(marca){
    this.marca=marca;

    }

Vehiculo.prototype.arrancar = function(){
    console.log("El vehículo ha arranacado")
}

function Coche(marca,modelo){
    Vehiculo.call(this,marca);
    this.modelo=modelo;
    }
    // Establecer la herencia de los metodos de vehiculo
Coche.prototype = Object.create(Vehiculo.prototype);

// Asegurar que el constructor de Coche apunte correctamente a la función Coche
Coche.prototype.constructor = Coche;

    Coche.prototype.mostrarInfo =function (){
        console.log("la marca del vehiculo es:" + this.marca + " "+ "El modelo del coche es:" + this.modelo)
}

const coche1 = new Coche("BMW","X6M60i")
coche1.arrancar();
coche1.mostrarInfo();

