
class DBConector {
  protected conexionDb;
  private static me?: DBConector;

  private constructor() {
    this.conexionDb = new RTCPeerConnection();
  }
  public static getInstance() {
    if (this.me) {
      return this.me;
    }
    this.me = new DBConector();
    return this.me;
  }
  public getConexion() {
    return this.conexionDb;
  }
}

DBConector.getInstance().getConexion();
DBConector.getInstance().getConexion();
