import { Poker} from "./Poker";
import { TragaMonedas } from "./TragaMonedas";

export class Casino {
    private poker: Poker;
    private tragaMonedas: TragaMonedas;

    constructor (){
        this.poker = new Poker();        
        this.tragaMonedas = new TragaMonedas();
    }
}




