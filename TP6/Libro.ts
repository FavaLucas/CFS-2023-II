export class Libro {
	
	private titulo: string;
	private autor: string;
	private genero: string;
	private anio: number;
	private editorial: string;
	private id: number;
	
	constructor(titulo: string, autor: string, genero: string, anio: number, editorial: string, id: number) {
		this.titulo = titulo
		this.autor = autor
		this.genero = genero
		this.anio = anio
		this.editorial = editorial
		this.id = id
	} 

	public getTitulo(): string {
		return this.titulo;
	}

	public setTitulo(titulo: string): void {
		this.titulo = titulo;
	}

	public getAutor(): string {
		return this.autor;
	}

	public setAutor(autor: string): void {
		this.autor = autor;
	}

	public getGenero(): string {
		return this.genero;
	}

	public setGenero(genero: string): void {
		this.genero = genero;
	}

	public getAnio(): number {
		return this.anio;
	}

	public setAnio(anio: number): void {
		this.anio = anio;
	}

	public getEditorial(): string {
		return this.editorial;
	}

	public setEditorial(editorial: string): void {
		this.editorial = editorial;
	}

	public getId(): number {
		return this.id;
	}

	public setId(id: number): void {
		this.id = id;
	}

}
