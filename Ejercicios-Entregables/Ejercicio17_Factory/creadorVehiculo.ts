export abstract class creadorvehiculo {
    protected marca: string;
    protected modelo: number;
    protected cantidadAsientos: number;
    protected capacidadCarga: number;

    public constructor(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadAsientos = cantidadAsientos;
        this.capacidadCarga = capacidadCarga;

    }
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): number {
        return this.modelo;
    }
    public getCantidadDeAsientos(): number {
        return this.cantidadAsientos;
    }
    getCapacidadDeCarga(): number {
        return this.capacidadCarga;
    }

    abstract crearVehiculo()
}