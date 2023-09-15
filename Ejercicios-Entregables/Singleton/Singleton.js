var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (this.me) {
            return this.me;
        }
        this.me = new Logger();
        return this.me;
    };
    Logger.prototype.getConexion = function () {
        //return this.logger;
        console.log("Hola");
    };
    return Logger;
}());
Logger.getInstance().getConexion();
Logger.getInstance().getConexion();
