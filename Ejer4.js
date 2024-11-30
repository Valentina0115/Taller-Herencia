class Empleado{
    constructor(Nombre,Salario){
        this.Nombre=Nombre;
        this.Salario=Salario;
    }
    obtenerDetalles(){
        return "Nombre:"+ " " + this.Nombre + " "+"Salario:" +" "+ this.Salario
    }
    
}

class Gerente extends Empleado{
    constructor(Nombre,Salario,Departamento){
        super(Nombre,Salario);
        this.Departamento=Departamento;

    }

    obtenerDetalles(){
        return super.obtenerDetalles() + "Departamento" + " "+ this.Departamento;
    }

}

const empleado1 = new Empleado("Sebastian", 900);
console.log(empleado1.obtenerDetalles());

const gerente1 = new Gerente("valentinita", 1500, "Alquilado");
console.log(gerente1.obtenerDetalles());
