"use strict";
exports.__esModule = true;
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca(nombre, domicilio) {
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.elementos = [];
    }
    Biblioteca.prototype.getNombre = function () {
        return this.nombre;
    };
    Biblioteca.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Biblioteca.prototype.getDomicilio = function () {
        return this.domicilio;
    };
    Biblioteca.prototype.setDomicilio = function (domicilio) {
        this.domicilio = domicilio;
    };
    Biblioteca.prototype.getElementos = function () {
        return this.elementos;
    };
    Biblioteca.prototype.setElementos = function (elementos) {
        this.elementos = elementos;
    };
    //Metodo insertar recibe por parametro un nuevoElemento de tipo ArticuloLectura, evalua si el articulo se encuenta en el arreglo y si es asi no lo agrega. Si no se encuentra lo agrega al arreglo en la ultima posicion.
    Biblioteca.prototype.insertar = function (nuevoElemento) {
        var encontrado = false;
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getIsbn() == nuevoElemento.getIsbn()) {
                console.log("El texto ya se encuentra en su listado. No sera agregado");
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            console.log("Se ha agregado su nuevo texto con exito");
            this.elementos.push(nuevoElemento);
        }
    };
    //Metodo para buscar un articulo por ID pasado por parametro, una vez encontrado lo retorna.
    Biblioteca.prototype.buscar = function (idTexto) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getIsbn() == idTexto) {
                console.log("Articulo encontrado", this.elementos[i]);
                break;
            }
        }
    };
    //Metodo que recibe por parametro un ID de texto y una cantidad de paginas.
    //Si encuentra el id en el arreglo, modifica la cantidad de paginas y retorna True, sino retorna
    Biblioteca.prototype.modificarPaginas = function (idTexto, cantPaginas) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getIsbn() == idTexto) {
                return this.elementos[i].setCantidadPaginas(cantPaginas);
            }
        }
        return true;
    };
    //Metodo que recibe por parametro un ID de texto, lo busca en el arreglo y lo elimina.
    Biblioteca.prototype.eliminar = function (idTexto) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getIsbn() == idTexto) {
                this.elementos.splice(i, 1);
                break;
            }
        }
        console.log("Texto Eliminado");
    };
    //Metodo que recibe por parameto un Autor y lo busca en el arreglo de articulos, todos los artiruclos de un mismo autor se almacenan en un nuevo arreglo y son retornados.
    Biblioteca.prototype.buscarPorAutor = function (autor) {
        var listado = [];
        var articulo;
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getAutor() == autor) {
                articulo = this.elementos[i];
                listado.push(articulo);
            }
        }
        return listado;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
