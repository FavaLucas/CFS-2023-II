var Auto = /** @class */ (function () {
    function Auto(marca, anioModelo, color, patente, dueño, encendido, combustible) {
        this.marca = marca;
        this.anioModelo = anioModelo;
        this.color = color;
        this.patente = patente;
        this.dueño = dueño;
        this.encendido = false;
        if (combustible) {
            this.combustible = combustible;
            this.combustible = true;
        }
        else {
            console.log("El auto no tiene combustible");
            this.combustible = false;
        }
    }
    //Algunos metodos Getter, se deben hacer todos. 
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.anioModelo;
    };
    Auto.prototype.cargarCombustible = function (combustible) {
        if (combustible) {
            console.log("El auto tiene combustible");
        }
        else {
            console.log("Su auto no tenia combustible, ahora se ha llenado el tanque");
        }
    };
    Auto.prototype.encenderAuto = function (encendido) {
        if (encendido) {
            console.log("Su Auto ha encendido: Brum Brum Brum");
        }
        else {
            console.log("El auto estaba apagado, lo encedere!");
        }
    };
    Auto.prototype.apagarAuto = function (encendido) {
        if (encendido) {
            this.encendido = false;
            console.log("Se apago el auto");
        }
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
    };
    RegistroAutomotor.prototype.listar = function () {
        // for (let index = 0; index < this.autos.length; index++) {
        //     const auto = this.autos[index];
        //     console.log(`${auto.getMarca()}`, `${auto.getModelo()}`, `${auto.getPatente()}`);    
        // }
        this.autos.forEach(function (auto) {
            console.log("".concat(auto.getMarca()), "".concat(auto.getModelo())); //`${auto.getPatente()}`);
        });
    };
    RegistroAutomotor.prototype.actualizar = function (auto) {
        var indiceAuto = -1;
        for (var index = 0; index < this.autos.length; index++) {
            var autoActual = this.autos[index];
            if (autoActual.getPatente() == auto.getPatente()) {
                indiceAuto = index;
            }
        }
        if (indiceAuto >= 0) {
            this.autos[indiceAuto] = auto;
        }
        // let indiceAuto = this.autos.findIndex((autoActual) =>{
        //     return autoActual.getPatente() == auto.getPatente();
        // });
        // if(indiceAuto >= 0){
        //     this.autos[indiceAuto] = auto;
        // }
    };
    return RegistroAutomotor;
}());
var auto1 = new Auto("Ford", 2018, "Gris", 1354785554, "Lucas Fava", false, false);
console.log(auto1);
auto1.encenderAuto(true);
auto1.cargarCombustible(false);
console.log("En AFIP solicitaron los datos: Marca ", +auto1.getMarca, "y el Modelo", +auto1.getModelo);
var ra = new RegistroAutomotor();
ra.darDeAlta(auto1);
ra.darDeAlta(new Auto("Toyota", 2010, "Rojo", 3215454, "Lucas Lucas", false, false));
ra.darDeAlta(new Auto("Volkswagen", 2010, "Rojo", 3215454, "Lucas Lucas", false, false));
ra.darDeAlta(new Auto("Honda", 2023, "Azul", 8954, "Lucas Ruiz", false, false));
ra.listar();
ra.actualizar(new Auto("Honda", 2023, "Azul", 8954, "Pedro Flores", false, false));
ra.listar();
