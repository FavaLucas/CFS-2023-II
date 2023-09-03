// Composite
interface Archivo {
  listarArchivos(indentacion: number): void;
  isDirectorio(): boolean;
}

class ArchivoTexto implements Archivo {
  protected nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  listarArchivos(indentacion: number): void {
    let indentacionStr = '';
    for (let index = 0; index < indentacion; index++) {
      indentacionStr += ' ';
    }
    console.log(indentacionStr + this.nombre);
  }

  isDirectorio(): boolean {
    return false;
  }

}

class Directorio implements Archivo {
  protected nombre: string;
  protected archivos: Archivo[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.archivos = [];
  }

  agregarArchivo(archivo: Archivo) {
    this.archivos.push(archivo);
  }

  listarArchivos(indentacion: number): void {
    let indentacionStr = '';
    for (let index = 0; index < indentacion; index++) {
      indentacionStr += ' ';
    }
    console.log(`${indentacionStr}[${this.nombre}]`);
    this.archivos.forEach((arch) => {
      arch.listarArchivos(indentacion + 4);
    });
  }
  isDirectorio(): boolean {
    return true;
  }
}

const raiz = new Directorio("C:");
const dir1 = new Directorio("Mis Documentos");
const dir2 = new Directorio("Descargas");

const archivo1 = new ArchivoTexto('resumen.txt');
const archivo2 = new ArchivoTexto('recetas.txt');
const archivo3 = new ArchivoTexto('listaCompra.txt');
const archivo4 = new ArchivoTexto('serialesw10.txt');
const archivo5 = new ArchivoTexto('cuentoCaperuzita.txt');
const archivo6 = new ArchivoTexto('horarios.txt');
const archivo7 = new ArchivoTexto('balance.txt');

raiz.agregarArchivo(dir1);
raiz.agregarArchivo(dir2);
raiz.agregarArchivo(archivo4);
dir1.agregarArchivo(archivo1);
dir1.agregarArchivo(archivo2);
dir1.agregarArchivo(archivo3);
dir2.agregarArchivo(archivo5);
const dir3 = new Directorio('Torrent');
dir2.agregarArchivo(dir3);
dir3.agregarArchivo(archivo6);
dir3.agregarArchivo(archivo7);

raiz.listarArchivos(0);