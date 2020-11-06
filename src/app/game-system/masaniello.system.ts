import { MasanielloRow } from './masaniello-models/masaniello-row';
import { MasanielloColumnTypeEnum } from './masaniello-models/masaniello-column-type.enum';
import { MasanielloCellStatusEnum } from './masaniello-models/masaniello-cell-status.enum';
import { MasanielloCell } from './masaniello-models/masaniello-cell';

export class MasanielloSystem {
    //#region Consts
    
    RED_POSITION: number = 0;
    BLACK_POSITION: number = 1;
    BET_WAIT_TEXT = "Wait!";
    MAX_VALUE = 11;

    //#endregion Consts

    //#region Properties

    public gameSystem : MasanielloRow[];
    public currentBet : string;
    public currentBetColor: MasanielloColumnTypeEnum = MasanielloColumnTypeEnum.None;
    public unitValue: number = 1;
    public currentPosition: number[] = new Array<number>(2);
    public playing: boolean = true;
    public balance: number = 0;

    //#endregion Properties

    //#region Constructor

    constructor() {
    this.gameSystem = [
        { columns: [{ value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 6, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 7, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 7, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 7, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 9, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 8, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 9, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 11, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 8, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 6, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 7, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 7, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 8, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 15, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 15, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 7, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 9, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 9, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 8, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 15, color:MasanielloColumnTypeEnum.Black }, { value: "0", mutiplier: 30, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 3, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 5, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 8, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 11, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 15, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 15, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }, { value: "0", mutiplier: 61, color:MasanielloColumnTypeEnum.Black }]},
        { columns: [{ value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 1, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 2, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 4, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 8, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 15, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 30, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 61, color:MasanielloColumnTypeEnum.Red }, { value: "0", mutiplier: 0, color:MasanielloColumnTypeEnum.None }]}
    ];

    this.reset(0);
    }

    //#endregion Constructor

    //#region Public Methods

    public reset(unitValue?:number) : void {
        if (unitValue) {
            this.unitValue = unitValue;
        }

        this.gameSystem.forEach((row) => {
            row.columns.forEach((cell) => {
                cell.value = (cell.mutiplier * this.unitValue).toFixed(2);
                cell.status = MasanielloCellStatusEnum.None;
            });
        });

        this.currentPosition = [0, 0];
        this.getCell().status = MasanielloCellStatusEnum.Playing;
        this.currentBet = this.BET_WAIT_TEXT;
        this.playing = true;
        this.balance = 0;
    }

    private getCell(position: number[] =this.currentPosition): MasanielloCell {
        return this.gameSystem[position[0]].columns[position[1]];
    }

    public play(playedValue:MasanielloColumnTypeEnum) : void {
        if (!this.playing) {
            return;
        }

        var previousCell = this.getCell();
        previousCell.status = MasanielloCellStatusEnum.Played;


        switch (playedValue) {
            case MasanielloColumnTypeEnum.Black:
                if (this.currentPosition[this.BLACK_POSITION] > this.currentPosition[this.RED_POSITION]) {
                    this.balance += Math.round(Number.parseFloat(previousCell.value) * 100) / 100;
                } else {
                    this.balance -= Math.round(Number.parseFloat(previousCell.value) * 100) / 100;
                }
                this.currentPosition[this.BLACK_POSITION] += 1;
                break;
            case MasanielloColumnTypeEnum.Red:
                    if (this.currentPosition[this.RED_POSITION] > this.currentPosition[this.BLACK_POSITION]) {
                        this.balance += Math.round(Number.parseFloat(previousCell.value) * 100) / 100;
                    } else {
                        this.balance -= Math.round(Number.parseFloat(previousCell.value) * 100) / 100;
                    }
                this.currentPosition[this.RED_POSITION] += 1;
                break;
            case MasanielloColumnTypeEnum.None:
                if (this.currentPosition[this.RED_POSITION] < this.currentPosition[this.BLACK_POSITION]) {
                    this.currentPosition[this.RED_POSITION] += 1;
                } else if(this.currentPosition[this.RED_POSITION] > this.currentPosition[this.BLACK_POSITION]) {
                    this.currentPosition[this.BLACK_POSITION] += 1;
                }
                
                this.balance -= Math.round(Number.parseFloat(previousCell.value) * 100) / 100;
                break;
        }

        if  (this.currentPosition[this.BLACK_POSITION] >= this.MAX_VALUE
            || this.currentPosition[this.RED_POSITION] >= this.MAX_VALUE) {
            this.playing = false;
            this.currentBet = "Finished!";
            this.currentBetColor = MasanielloColumnTypeEnum.None;
            return;
        }

        var currentCell = this.getCell();
        currentCell.status = MasanielloCellStatusEnum.Playing;
        this.currentBet = this.currentPosition[this.RED_POSITION] == this.currentPosition[this.BLACK_POSITION]
            ? this.BET_WAIT_TEXT
            : currentCell.value;
        this.currentBetColor =this.currentPosition[this.RED_POSITION] == this.currentPosition[this.BLACK_POSITION]
            ? MasanielloColumnTypeEnum.None
            : (this.currentPosition[this.RED_POSITION] > this.currentPosition[this.BLACK_POSITION] 
                ? MasanielloColumnTypeEnum.Red
                : MasanielloColumnTypeEnum.Black);
    }

    //#endregion Public Methods
}