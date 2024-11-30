class animal {
    constructor(Nombre,Edad){
        this.Nombre=Nombre;
        this.Edad=Edad;
    }

    hacerSonido(){
        console.log("El animal hace un sonido.");
        console.log("Nombre"+" "+this.Nombre+" "+"Edad"+" "+this.Edad)

    }
}

class perro extends animal{
    constructor(Nombre, Edad,raza){
        super(Nombre,Edad) 
        this.Raza=raza //agreagamos la nueva propiedad raza, ejercicio2
    }
     hacerSonido(){
        console.log("El Perro ladra: !Guau!");
     }
     laRaza(){
        console.log("La raza es:"," " + this.Raza);
     }
     datos(){
        console.log("El nombre es:" + " "+this.Nombre +" "+ "Edad:" + this.Edad)
     }

}

let animal1 = new animal("muñeca",11);
animal1.hacerSonido();
let perro1 = new perro("Susy",3,"Criolla");
perro1.hacerSonido();
perro1.laRaza();
perro1.datos();
