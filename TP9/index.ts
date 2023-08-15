// <div id="principal" class="portal-princial" style="background-color: aquamarine;">
// ​
// <input type="text" id="texto1" name="texto1" value="hola mundo" class="control-text">

class ElementoInput {
    private id: string;
    private className: string;
    private name: string;
    private value: string;
    private type: string;


    public constructor(id: string, className: string, name: string, value: string, type: string) {
        this.id = id;
        this.className = className;
        this.name = name;
        this.value = value;
        this.type = type;

    }

    public crearInput(): HTMLElement {
        let texto1 = document.createElement("input");
        texto1.id = this.id;
        texto1.className = this.className;
        texto1.name = this.name;
        texto1.value = this.value;
        texto1.type = this.type;

        return texto1;

    }



}

function agregarElemento() {

    let divPrincipal = document.getElementById("principal");
    let objTexto1 = new ElementoInput("texto1", "control-text", "texto1", "hola mundo", "text");
    divPrincipal.appendChild(objTexto1.crearInput());


}


    // public getType(): string {
    //     return this.type;
    // }

    // public setType(type: string): void {
    //     this.type = type;
    // }

    // public getId(): string {
    //     return this.id;
    // }

    // public setId(id: string): void {
    //     this.id = id;
    // }

    // public getName(): string {
    //     return this.name;
    // }

    // public setName(name: string): void {
    //     this.name = name;
    // }

    // public getValues(): string {
    //     return this.values;
    // }

    // public setValues(values: strin
