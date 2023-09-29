"use strict";
exports.__esModule = true;
exports.Bilioteca = void 0;
var Bilioteca = /** @class */ (function () {
    function Bilioteca(nombre, domicilio) {
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.elementos = [];
    }
    Bilioteca.prototype.getNombre = function () {
        return this.nombre;
    };
    Bilioteca.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Bilioteca.prototype.getDomicilio = function () {
        return this.domicilio;
    };
    Bilioteca.prototype.setDomicilio = function (domicilio) {
        this.domicilio = domicilio;
    };
    Bilioteca.prototype.getElementos = function () {
        return this.elementos;
    };
    Bilioteca.prototype.setElementos = function (elementos) {
        this.elementos = elementos;
    };
    /**
     * Metodo para agregar un articulo nuevo al arreglo de elementos.
     * En caso que el articulo ya exista no se agrega y retorna false.
     * En caso que el articulo no exista se agrea y retorna true.
     * @param newArticulo
     * @returns
     */
    Bilioteca.prototype.insertar = function (newArticulo) {
        var tryInsertar = false;
        this.elementos.forEach(function (articuloActual) {
            if (articuloActual.getIsbn() == newArticulo.getIsbn()) {
                console.log("El elemento ya se encuenta en su biblioteca, no sera agregado");
            }
        });
        if (!tryInsertar) {
            console.log("Se ha agregado su Articulo a la biblioteca");
            this.elementos.push(newArticulo);
            tryInsertar = true;
        }
        return tryInsertar;
    };
    /**
     * Metodo para buscar un articulo por su identificador.
     * Si el articulo se encuenta se retorna el mismo
     * si no se encuentra se muesta mensaje por console.log
     * @param idTexto
     * @returns
     */
    Bilioteca.prototype.buscar = function (idTexto) {
        var articuloEncontrado;
        var encontrado = false;
        this.elementos.forEach(function (articuloActual) {
            if (articuloActual.getIsbn() == idTexto) {
                articuloEncontrado = articuloActual;
                encontrado = true;
            }
        });
        if (!encontrado) {
            console.log("El articulo no se encuentra en su biblioteca");
        }
        return articuloEncontrado;
    };
    /**
     * Metodo para buscar un articulo por ID y modificar su cantidad de paginas.
     * Si el articulo se encuentra, retorna true en otro caso retorna false.
     * @param idTexto
     * @param cantPaginas
     * @returns
     */
    Bilioteca.prototype.modificarPaginas = function (idTexto, cantPaginas) {
        var encontrado = false;
        this.elementos.forEach(function (articuloActual) {
            if (articuloActual.getIsbn() == idTexto) {
                console.log(articuloActual);
                articuloActual.setCantidadPaginas(cantPaginas);
                console.log("Se modifico la cantidad de paginas");
                console.log(articuloActual);
                encontrado = true;
            }
        });
        if (!encontrado) {
            console.log("El articulo no se encuentra en su biblioteca");
        }
        return encontrado;
    };
    /**
     * Metodo que realiza la busqueda segun el parametro ingresado Autor, si lo encuentra retorna un arreglo con todos los articulos escritos por dicho autor.
     * @param buscarAutor
     * @returns
     */
    Bilioteca.prototype.buscarPorAutor = function (buscarAutor) {
        var articulosEncontrados = [];
        var encontrados = false;
        this.elementos.forEach(function (articuloActual) {
            if (articuloActual.getAutor() == buscarAutor) {
                articulosEncontrados.push(articuloActual);
                encontrados = true;
            }
        });
        if (!encontrados) {
            console.log("No se encontraron articulos del autor indicado");
        }
        return articulosEncontrados;
    };
    /**
     * Metodo que recibe un id de texto para buscar en el arreglo, si lo encuentra lo elimina y retorna true.
     * @param idTexto
     * @returns
     */
    Bilioteca.prototype.eliminar = function (idTexto) {
        var encontrado = false;
        for (var i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i].getIsbn() == idTexto) {
                encontrado = true;
                console.log("El articulo fue eliminado");
                this.elementos.splice(i, 1);
                break;
            }
        }
        if (!encontrado) {
            console.log("El articulo buscado no se encuentra en la biblioteca");
        }
        return encontrado;
    };
    return Bilioteca;
}());
exports.Bilioteca = Bilioteca;
