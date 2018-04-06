export class Persona {

    public nombre: string;
    public apellido: string;
    public edad: number;

    constructor(
    ) { }

    Guardar() {
        console.info(this);
        localStorage.setItem("Persona", JSON.stringify(this));
    }

    Traer() {
        console.info(this);
        alert(localStorage.getItem("Persona"));
    }


}