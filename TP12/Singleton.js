var DBConector = /** @class */ (function () {
    function DBConector() {
        this.conexionDb = new RTCPeerConnection();
    }
    DBConector.getInstance = function () {
        if (this.me) {
            return this.me;
        }
        this.me = new DBConector();
        return this.me;
    };
    DBConector.prototype.getConexion = function () {
        return this.conexionDb;
    };
    return DBConector;
}());
DBConector.getInstance().getConexion();
DBConector.getInstance().getConexion();
