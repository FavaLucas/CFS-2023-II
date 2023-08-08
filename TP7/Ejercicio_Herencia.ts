import { Televisor } from "./Televisor";
import { SmartTV } from "./SmartTV";

console.log("-------------------------");
let tele = new Televisor(0, 10, false);
console.log(tele);
tele.setCanal(30);
console.log(tele);
console.log("-------------------------");
let teleSmart = new SmartTV();
console.log(teleSmart);
teleSmart.setCanal(55);
console.log(teleSmart);
console.log("-------------------------");
let tele1 = new Televisor(0, 10, true);
let tele2 = new Televisor(38, 5, false);
console.log(tele1);
console.log(tele2);
console.log("-------------------------");