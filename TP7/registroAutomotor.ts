import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";
import { vehiculo } from "./automovil";
  
  class RegistroAutomotor {
    private vehiculos: vehiculo[];
    constructor() {
      this.vehiculos = [];
    }
  
    darDeAlta(auto: vehiculo) {
      this.vehiculos.push(auto);
    }
  
    listar(): void {
      console.log("Lista de Automotores")
      console.log("----------------------------------------------------------")
      this.vehiculos.forEach((auto: vehiculo, indice: number) => {
        console.log(`${indice + 1} - ${auto.getTipo()} -${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}) Patente: ${auto.getPatente()}`);
      });
      console.log();
      console.log();
    }
  
    actualizar(auto: vehiculo): void {
      let indiceAuto = -1;
      for (let index = 0; index < this.vehiculos.length; index++) {
        const autoActual = this.vehiculos[index];
        if (autoActual.getPatente() == auto.getPatente()) {
          indiceAuto = index;
        }
      }

      if (indiceAuto >= 0) {
        this.vehiculos[indiceAuto] = auto;
      }
    }
  
    // implementar el eliminar!!
    eliminar(patente: string): void {
      let indiceAuto = -1;
      for (let index = 0; index < this.vehiculos.length; index++) {
        const autoActual = this.vehiculos[index];
        if (autoActual.getPatente() === patente) {
          this.vehiculos.splice(index, 1);
        }
      }
    }
  }
  
  
  
  console.clear();
  let ra = new RegistroAutomotor();
  let auto1 = new Moto('AB654RO', 'Ford', 'Focus', 2018);
  ra.darDeAlta(auto1);
  ra.darDeAlta(new Auto('AB654RQ', 'Ford', 'Fairline', 2019));
  ra.darDeAlta(new Auto('AB444RQ', 'Nissan', 'Sentra', 2016));
  ra.darDeAlta(new Auto('AB699RQ', 'Mazda', 'Zrx', 2014));
  ra.darDeAlta(new Auto('BB654RQ', 'Audi', 'A3', 2019));
  ra.darDeAlta(new Auto('AF636RQ', 'Fiat', 'Chronos', 2023));
  ra.listar();
  ra.actualizar(new Auto('AB699RQ', 'Mazda', 'Sirocco', 2015))
  ra.listar();
  ra.eliminar('AB654RO');
  ra.listar();
  ra.darDeAlta(new Auto('AZ699RQ', 'Mazzzda', 'Zrxz', 2018));
  ra.darDeAlta(new Camion('camasdasion', 'Auudi', 'A33', 2049));
  ra.listar();
  ra.darDeAlta(new Moto('moasdasdto','Yamaha','2017',450));
  ra.listar();
  