export class GameStats {
    //#region Members

    public Counter: number = 0;
    public Balance: number = 0;
    public Unit: number = 1;
    public WonLastPlay: boolean = false;

    //#endregion Members

    //#region Constructor

    constructor(unit: number) {
        this.Unit = unit;
    }

    //#endregion Constructor
}