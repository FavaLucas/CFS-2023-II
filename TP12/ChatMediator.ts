
// Paso 1: Definir la interfaz ChatMediator
interface ChatMediator {
    addUser(user: ChatUser): void;
    sendMessage(user: ChatUser, message: string): void;
    broadcastMessage(user: ChatUser, message: string): void;
}

// Paso 2: Crear una clase para representar a un usuario
class ChatUser {

    protected name: string
    protected mediator: ChatMediator

    constructor(name: string, mediator: ChatMediator) {
        this.name = name
        this.mediator = mediator
    }

    public getName(): string {
        return this.name;
    }

    public send(message: string): void {
        this.mediator.sendMessage(this, message);
    }

    // public sendTo(user: ChatUser, message: string): void {
    //     this.mediator.sendMessage(user, message);
    // }

    public receiveMessage(message: string): void {
        console.log(`[ ${this.name} ] recibió el mensaje: [ ${message} ]`);
    }
}

// Paso 3: Implementar la clase ChatRoom como mediador
class ChatRoom implements ChatMediator {
    
    private users: ChatUser[] = [];
    private name: string

    constructor(name: string) {
        this.name = name
    }

    public addUser(user: ChatUser): void {
        this.users.push(user);
    }

    public sendMessage(user: ChatUser, message: string): void {
        user.receiveMessage(message);
    }

    public broadcastMessage(user: ChatUser, message: string): void {
        for (const u of this.users) {
            if (u !== user) {
                u.receiveMessage("[ " + user.getName() + ` ] dijo: [ ${message} ]`);
            }
        }
    }
}

// Paso 4: Crear instancias de usuarios y configurar el mediador
const mediator = new ChatRoom("Sala Publica");

const user1 = new ChatUser("Usuario 1", mediator);
const user2 = new ChatUser("Usuario 2", mediator);
const user3 = new ChatUser("Usuario 3", mediator);

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);

// Paso 5: Permitir que los usuarios envíen y reciban mensajes
user1.send("¡Hola a todos!");
user2.send("¡Hola, Usuario 1!");
user3.send("Saludos desde el chat.");

mediator.broadcastMessage(user1, "Mensaje para todos");

mediator.sendMessage(user2, "Mensaje 2");


const mediator2 = new ChatRoom("Sala deportes");

const user11 = new ChatUser("Maria", mediator2);
const user22 = new ChatUser("Paula", mediator2);

mediator2.addUser(user11);
mediator2.addUser(user22);

mediator2.broadcastMessage(user11, "Hola a todo el mundo!");

const user33 = new ChatUser("Pedro", mediator2);
mediator2.addUser(user33);

mediator2.broadcastMessage(user33, "Hola de nuevo!");
