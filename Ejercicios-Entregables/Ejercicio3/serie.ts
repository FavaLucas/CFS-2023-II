export class Serie {

    private titulo: string;
    private anioDeEstreno: number;
    private episodiosPorTemporada: number;
    private temporadas: number;
    private episodiosVistos: number;
    private finalizadaCancelada: boolean;

    constructor(titulo: string, anioDeEstreno: number, episodiosPorTemporada: number, temporadas: number) {
        this.titulo = titulo;
        this.anioDeEstreno = anioDeEstreno;
        this.episodiosPorTemporada = episodiosPorTemporada;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizadaCancelada = false;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAnioDeEstreno(): number {
        return this.anioDeEstreno;
    }

    public getEpisodiosPorTemporada(): number {
        return this.episodiosPorTemporada;
    }

    public getTemporadas(): number {
        return this.temporadas;
    }

    public getEpisodiosVistos(): number {
        return this.episodiosVistos;
    }

    public getFinalizadaCancelada(): boolean {
        return this.finalizadaCancelada;
    }

    public verEpisodio(temporada: number, episodio: number) {
        console.log(`Estas viendo la serie:`, this.getTitulo(), `temporada: ${temporada}, episodio: ${episodio}`);
        this.episodiosVistos++;
        console.log(`Los episodios que ya vistes son:`, this.episodiosVistos)
    }

    public episodiosPorVer() {
        let episodiosPorVer: number = this.episodiosPorTemporada * this.temporadas - this.episodiosVistos;
        console.log(`Los episodios que quedan son: `, episodiosPorVer);
    }

    public serieVista() {

        if (this.episodiosPorTemporada * this.temporadas - this.episodiosVistos == 0) {
            console.log(`Terminaste la serie: ${this.titulo}`);
            this.finalizadaCancelada = true;
        } else {
            console.log("Aun estas ahi?, Puedes seguir viendo la serie");
        }
    }


    public toString(serie: Serie) {
        console.log(serie);
        console.log(`Estas viendo: `, serie.getTitulo(), `Que fue estrenada el anio: `, serie.getAnioDeEstreno(), `con: `, serie.getTemporadas(), `temporadas,`, `y con: `, serie.getEpisodiosPorTemporada(), `capitulos`)
    }

}
























// • Crear una clase que represente una Serie. Esta tiene que
// tener, al menos, las siguientes propiedades y métodos:
// - Título
// - Año de estreno
// - Episodios
// - Temporadas
// - Episodios Vistos
// - Finalizada/Cancelada
// - Ver episodio (método)
// - Episodios por ver (método)
// - Serie Vista (método)
// - toString (método)