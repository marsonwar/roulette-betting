import { PieceNumberEnum } from "../../enums/PieceNumberEnum";
import { IGameSystem } from "../../interfaces/IGameSystem";
import { Bet } from "../Bet";

export class BasicMartingGaleUpper implements IGameSystem {
    //#region Public Methods

    public getType() {
        return 'BasicMartingGaleOutUpper';
    }

    public getBets(previousBet: Bet[] | undefined, losses: number, prize: number) : Bet[] {
        if (!previousBet 
                || previousBet.length == 0
                || !previousBet.find(t => t.Number == PieceNumberEnum.OutUpper)) {
            return [{
                Number: PieceNumberEnum.OutUpper,
                Units: 1
            }];
        }
        
        const prvB = previousBet.find(t => t.Number == PieceNumberEnum.OutUpper) ?? <Bet>{};
        
        if (prize <= losses) {
            prvB.Units *= 2;
        } else {
            prvB.Units = 1;
        }
        
        return previousBet;
    }

    //#endregion Public Methods
}