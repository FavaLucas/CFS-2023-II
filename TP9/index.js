// <div id="principal" class="portal-princial" style="background-color: aquamarine;">
// ​
// <input type="text" id="texto1" name="texto1" value="hola mundo" class="control-text">
var ElementoInput = /** @class */ (function () {
    function ElementoInput(id, className, name, value, type) {
        this.id = id;
        this.className = className;
        this.name = name;
        this.value = value;
        this.type = type;
    }
    ElementoInput.prototype.crearInput = function () {
        var texto1 = document.createElement("input");
        texto1.id = this.id;
        texto1.className = this.className;
        texto1.name = this.name;
        texto1.value = this.value;
        texto1.type = this.type;
        return texto1;
    };
    return ElementoInput;
}());
function agregarElemento() {
    var divPrincipal = document.getElementById("principal");
    var objTexto1 = new ElementoInput("texto1", "control-text", "texto1", "hola mundo", "text");
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
