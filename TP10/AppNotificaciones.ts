abstract class ServicioDeNotificaciones {
  abstract enviarNotificacion(mensaje: string, contacto?: Contacto): void;
}
class EmailNotificacionService extends ServicioDeNotificaciones {
  enviarNotificacion(mensaje: string, contacto?: Contacto): void {
    if (contacto) {
      console.log(
        `Se ha enviado su notificacion por email a ${contacto.getEmail()}: ${mensaje}`
      );
    }
  }
}

class SmsNotificacionService extends ServicioDeNotificaciones {
  enviarNotificacion(mensaje: string, contacto?: Contacto): void {
    if (contacto) {
      console.log(
        `Se ha enviado su notificacion por SMS a ${contacto.getTel()}: ${mensaje}`
      );
    }
  }
}

class Contacto {
  protected email: string;
  protected telefono: number;
  constructor(email: string, telefono: number) {
    this.email = email;
    this.telefono = telefono;
  }
  getEmail() {
    return this.email;
  }
  getTel() {
    return this.telefono;
  }
}

class Usuario {
  protected nombreUsuario: string;
  protected contacto?: Contacto;
  constructor(nombreUsuario: string) {
    this.nombreUsuario = nombreUsuario;
  }
  getNombreUsuario() {
    return this.nombreUsuario;
  }
  getContacto() {
    return this.contacto;
  }
  setContacto(contacto: Contacto) {
    this.contacto = contacto;
  }
}

class Aplicacion {
  private servicioNotificacion;
  constructor(servicioNotificacion: ServicioDeNotificaciones) {
    this.servicioNotificacion = servicioNotificacion;
  }

  public ejecutar(usuario: Usuario) {
    this.servicioNotificacion.enviarNotificacion(
      `Hola ${usuario.getNombreUsuario()} se ejecuta tu APP`, usuario.getContacto()
    );
  }
}

const Notificacion1 = new EmailNotificacionService();
const Notificacion2 = new SmsNotificacionService();

const usuario1 = new Usuario("Lucas Fava");
const contacto1 = new Contacto("lucasfava86@gmail.com", 2216212552);
usuario1.setContacto(contacto1);
const aplicacion = new Aplicacion(Notificacion2);

aplicacion.ejecutar(usuario1);
