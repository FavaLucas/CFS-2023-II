class Logger {
  //protected logger;
  private static me?: Logger;

  private constructor() {}

  public static getInstance() {
    if (this.me) {
      return this.me;
    }
    this.me = new Logger();
    return this.me;
  }

  public accederSistema() {
    //return this.logger;
    console.log("Hola");
  }
}

Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
