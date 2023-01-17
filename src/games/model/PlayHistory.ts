import { PieceColorEnum } from "../enums/PieceColorEnum";

export class PlayHistory {
    //#region Members

    public Number: number = 0;
    public DiffBallance: number = 0;
    public Ballance: number = 0;
    public Color: PieceColorEnum = PieceColorEnum.Black;

    //#endregion Members
}