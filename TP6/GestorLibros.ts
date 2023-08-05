import { Libro } from "./libro";

import * as rls from 'readline-sync';
class GestorLibros {
    //Atributos
    private nombreBiblioteca: string;
    private libros: Libro[];

    public constructor(nombreBiblioteca: string) {
        this.nombreBiblioteca = nombreBiblioteca;
        this.libros = new Array();
        //this.libros = [];
    }
    //Metodos

    public insertarLibro(libro: Libro) {
        this.libros.push(libro);
    };

    public eliminarLibroId(id: number): void {
        for (let indice = 0; indice < this.libros.length; indice++) {
            if (this.libros[indice].getId() == id) {
                this.libros.splice(indice, 1)
                console.log('Su libro se elimino')
            }
        }
    }

    public editarLibro(id: number) {
        console.log('entro');
        let condicion: string = 'y'
        let libroEditar: number = -1;
        for (let index = 0; index < this.libros.length; index++) {
            if (this.libros[index].getId() == id) {
                libroEditar = index;
            }
        }
        while (condicion = 'y') {
            let accion: number = rls.questionInt(' ingrese elemento a editar: 1: titulo, 2:autor, 3: genero, 4:anio, 5: editorial;...  ');

            switch (accion) {
                case 1: {
                    let variable: string = rls.question('ingrece nuevo titulo:');
                    this.libros[libroEditar].setTitulo(variable);
                    break
                }

                case 2: {
                    let variable: string = rls.question('ingrece nuevo autor:');
                    this.libros[libroEditar].setAutor(variable);
                    break
                }
                case 3: {
                    let variable: string = rls.question('ingrece nuevo genero:');
                    this.libros[libroEditar].setGenero(variable);
                    break
                }
                case 4: {
                    let variable: number = rls.questionInt('ingrece nuevo anio:');
                    this.libros[libroEditar].setAnio(variable);
                    break
                }
                case 5: {
                    let variable: string = rls.question('ingrece nuevo editorial:');
                    this.libros[libroEditar].setEditorial(variable);
                    break
                }
            }
            condicion = rls.question('quiere seguir editando?: y/n:');
            if (condicion == 'n') {
                break
            }

        }

        console.log('se edito el libro: ', this.libros[libroEditar]);
    }

    public busquedaLibro(dato) {

        switch (dato) {
            case 1: {
                let variable: string = rls.question('ingrece titulo: ');

                for (let indice = 0; indice < this.libros.length; indice++) {
                    if (this.libros[indice].getTitulo() == variable) {
                        console.log(this.libros[indice]);
                    }
                }
                break
            }


            case 2: {
                let variable: string = rls.question('ingrece autor:');
                for (let indice = 0; indice < this.libros.length; indice++) {
                    if (this.libros[indice].getAutor() == variable) {
                        console.log(this.libros[indice]);
                    }
                }
                break
            }
            case 3: {
                let variable: string = rls.question('ingrece genero:');
                for (let indice = 0; indice < this.libros.length; indice++) {
                    if (this.libros[indice].getGenero() == variable) {
                        console.log(this.libros[indice]);
                    }
                }
                break
            }
            case 4: {
                let variable: number = rls.questionInt('ingrece anio:');

                for (let indice = 0; indice < this.libros.length; indice++) {
                    if (this.libros[indice].getAnio() == variable) {
                        console.log(this.libros[indice]);
                    }
                }
                break
            }
            case 5: {
                let variable: string = rls.question('ingrece editorial:');

                for (let indice = 0; indice < this.libros.length; indice++) {
                    if (this.libros[indice].getEditorial() == variable) {
                        console.log(this.libros[indice]);
                    }
                }
                break
            }
            case 6: {
                let variable: number = rls.questionInt('ingrece id:');
                for (let indice = 0; indice < this.libros.length; indice++) {
                    if (this.libros[indice].getId() == variable) {
                        console.log(this.libros[indice]);
                    }
                }
                break
            }
            default: console.log('numero invalido')

        }




    }
}

function start() {
    let estado: string = 'y';
    while (estado == 'y') {

        console.log('ingrece accion a realizar:');
        console.log('1: crear y agregar libro a biblioteca');
        console.log('2: buscar libro');
        console.log('3: editar libro');
        console.log('4: eliminar libro');
        console.log('5: mostrar biblioteca');
        console.log('...');

        let elemento: number = rls.questionInt('su opcion:')
        let si: string = 'y';

        switch (elemento) {
            case 1: {
                while (si == 'y') {
                    biblioteca1.insertarLibro(crearLibro())
                    si = rls.question('quiere crear nuevo libro: y/n:')
                    if (si == 'n') {
                        break
                    }
                }
                break
            }
            case 2: {
                let busqueda: number = rls.questionInt('Porque quiere buscar? 1: titulo, 2:autor, 3: genero, 4:anio, 5: editorial, 6:id;... ')
                biblioteca1.busquedaLibro(busqueda);
                break
            }
            case 3: {
                let editar: number = rls.questionInt('ingrece id del libro a editar:')
                biblioteca1.editarLibro(editar);
                break
            }
            case 4: {
                let eliminar: number = rls.questionInt('ingrece id del libro a eliminar:')
                biblioteca1.eliminarLibroId(eliminar);
                break
            }
            case 5: {
                console.log(biblioteca1);
            }
        }
        estado = rls.question('desea continuar: y/n:')
        if (estado == 'n') {
            break
        }
    }
}


function crearLibro(): Libro {
    let titulo: string = rls.question('titulo: ')
    let autor: string = rls.question('autor: ')
    let genero: string = rls.question('genero: ')
    let anio: number = rls.questionInt('anio: ')
    let editorial: string = rls.question('editorial: ')
    let id: number = rls.questionInt('id: ')
    let libroNuevo = new Libro(titulo, autor, genero, anio, editorial, id);
    return libroNuevo//`${libroNuevo++}`;
}

let biblioteca1 = new GestorLibros("Primero de Mayo");
start()

//-------------------------------------------------------------------------------------------------------------------------------------------











/* let libro1 = new Libro('juan', 'juan autor', 'juanitos', 2000, 'juan fc', 12)
            let libro2= new Libro('juan6', 'autor', 'juanitos', 2001, 'juan conrp', 5)
            let libro3 = new Libro('juan2', 'autor', 'juanitos', 2015, 'juan fc', 62)
            let libro4 = new Libro('juan3', 'juan autor', 'juanitos', 2005, 'juan 23', 72)
            let libro5 = new Libro('juan4', 'autor', 'juanitos', 2001, 'juan fc', 82)
            let libro6 = new Libro('juan5', 'juan autor', 'juanitos', 2001, 'juan 23', 92)
            biblioteca1.insertarLibro(new Libro("Hola", "Lorena", "Capeluz", 2018, 'asd', 1));
            biblioteca1.insertarLibro(libro1)
            biblioteca1.insertarLibro(libro2)
            biblioteca1.insertarLibro(libro3)
            biblioteca1.insertarLibro(libro4)
            biblioteca1.insertarLibro(libro5)
            biblioteca1.insertarLibro(libro6) */