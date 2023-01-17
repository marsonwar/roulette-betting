import { PieceNumberEnum } from "../../enums/PieceNumberEnum";
import { IGameSystem } from "../../interfaces/IGameSystem";
import { Bet } from "../Bet";

export class BasicMartingGaleLower implements IGameSystem {
    //#region Public Methods

    public getType() {
        return 'BasicMartingGaleOutLower';
    }

    public getBets(previousBet: Bet[] | undefined, losses: number, prize: number) : Bet[] {
        if (!previousBet 
                || previousBet.length == 0
                || !previousBet.find(t => t.Number == PieceNumberEnum.OutLower)) {
            return [{
                Number: PieceNumberEnum.OutLower,
                Units: 1
            }];
        }
        
        const prvB = previousBet.find(t => t.Number == PieceNumberEnum.OutLower) ?? <Bet>{};
        
        if (prize <= losses) {
            prvB.Units *= 2;
        } else {
            prvB.Units = 1;
        }
        
        return previousBet;
    }

    //#endregion Public Methods
}