import { PieceNumberEnum } from "src/games/enums/PieceNumberEnum";
import { IGameSystem } from "../../interfaces/IGameSystem";
import { Bet } from "../Bet";

export class BasicMoranello implements IGameSystem {
    //#region Member

    private gridHelper: number [][] = [
        [0, 1, 2, 3, 4, 4, 3, 2, 1, 1, 0],
        [1, 0, 1, 3, 4, 4, 4, 3, 2, 1, 0],
        [2, 1, 0, 2, 3, 4, 5, 4, 3, 2, 0],
        [3, 3, 2, 0, 2, 4, 5, 6, 5, 3, 1],
        [4, 4, 3, 2, 0, 2, 5, 7, 7, 5, 2],
        [4, 4, 4, 4, 2, 0, 3, 7, 9, 8, 4],
        [3, 4, 5, 5, 5, 3, 0, 5, 9, 11, 8],
        [2, 3, 4, 6, 7, 7, 5, 0, 8, 15, 15],
        [1, 2, 3, 5, 7, 9, 9, 8, 0, 15, 30],
        [1, 1, 2, 3, 5, 8, 11, 15, 15, 0, 61],
        [0, 0, 0, 1, 2, 4, 8, 15, 30, 61, 0,],
    ];
    private currentPosition: { x: number, y: number } = { x: 0, y: 0};

    //#endregion


    //#region Public Methods

    public getType() {
        return 'BasicMoranello';
    }

    public getBets(previousBet: Bet[] | undefined, losses: number, prize: number): Bet[] {
        const won = prize > losses;
        let betBlack = this.currentPosition.x > this.currentPosition.y;

        if (won) {
            if (betBlack) {
                this.currentPosition.x += 1;
            } else {
                this.currentPosition.y += 1;
            }
        } else {
            if (betBlack) {
                this.currentPosition.y += 1;
            } else {
                this.currentPosition.x += 1;
            }
        }

        console.log(this.currentPosition);

        betBlack = this.currentPosition.x > this.currentPosition.y;

        if (this.gridHelper[this.currentPosition.x][this.currentPosition.y] == 0) {
            return [];
        } else {
            return [{
                Number: betBlack 
                    ? PieceNumberEnum.OutBlack
                    : PieceNumberEnum.OutRed,
                Units: this.gridHelper[this.currentPosition.x][this.currentPosition.y]
            }];
        }
    }

    //#endregion Public Methods
}