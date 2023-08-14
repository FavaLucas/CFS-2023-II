// Diferentes tipos de passwords, poder usar esos password como autenticadores
interface Autenticador {
  autenticar(password: string): boolean;
}

abstract class Password implements Autenticador {
  private longitudMinima: number;
  private incluyeNumero: boolean;
  private incluyeMayuscula: boolean;

  constructor(longitudMinima: number, incluyeNumero: boolean, incluyeMayuscula: boolean) {
    this.longitudMinima = longitudMinima;
    this.incluyeNumero = incluyeNumero;
    this.incluyeMayuscula = incluyeMayuscula;
  }

  esPasswordValido(password: string): boolean {
    let passwordValid: boolean = true;
    if (password.length < this.longitudMinima) {
      passwordValid = false;
    }
    if (this.incluyeNumero) {
      let tieneNumero: boolean = false;
      for (let index = 0; index < password.length; index++) {
        const caracter = password[index];
        // '1234567890'.includes(caracter) es lo mismo que preguntar si caracter es un numero
        tieneNumero = tieneNumero || '1234567890'.includes(caracter);
      }
      if (!tieneNumero) {
        passwordValid = false;
      }
    }
    if (this.incluyeMayuscula) {
      let tieneMayuscula: boolean = false;
      for (let index = 0; index < password.length; index++) {
        const caracter = password[index];
        tieneMayuscula = tieneMayuscula || (caracter.toUpperCase() == caracter);
      }
      if (!tieneMayuscula) {
        passwordValid = false;
      }
    }
    return passwordValid;
  }

  abstract autenticar(password: string): boolean;
}

class PasswordDebil extends Password {
  constructor() {
    super(5, false, false);
  }

  autenticar(password: string): boolean {
    return false;
  }
}

class PasswordFuerte extends Password {
  constructor() {
    super(8, true, true);
  }

  autenticar(password: string): boolean {
    return false;
  }
}

let pwdManager: Password = new PasswordFuerte();
pwdManager.esPasswordValido("Holaaa");

let pwdManager2: Autenticador = new PasswordFuerte();
pwdManager2.autenticar("dffd");
