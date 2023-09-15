export class Usuario{
    protected nombre: string;
    protected email: string;
    protected contraseña: number;

    public constructor(nombre: string, email: string, contraseña: number){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    public getNombre():string {
      return this.nombre;

    }

    public publicarPost(post:string):void{
        console.log (`${this.nombre} publico el siguiente post:`, post);
    }

    public comentarPost(comentar: string): void{
        console.log (`${this.nombre} realizo  el siguiente comentario:`, comentar);

    }
}