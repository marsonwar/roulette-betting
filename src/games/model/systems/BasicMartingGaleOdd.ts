import { PieceNumberEnum } from "../../enums/PieceNumberEnum";
import { IGameSystem } from "../../interfaces/IGameSystem";
import { Bet } from "../Bet";

export class BasicMartingGaleOdd implements IGameSystem {
    //#region Public Methods

    public getType() {
        return 'BasicMartingGaleOutOdd';
    }

    public getBets(previousBet: Bet[] | undefined, losses: number, prize: number) : Bet[] {
        if (!previousBet 
                || previousBet.length == 0
                || !previousBet.find(t => t.Number == PieceNumberEnum.OutOdd)) {
            return [{
                Number: PieceNumberEnum.OutOdd,
                Units: 1
            }];
        }
        
        const prvB = previousBet.find(t => t.Number == PieceNumberEnum.OutOdd) ?? <Bet>{};
        
        if (prize <= losses) {
            prvB.Units *= 2;
        } else {
            prvB.Units = 1;
        }
        
        return previousBet;
    }

    //#endregion Public Methods
}