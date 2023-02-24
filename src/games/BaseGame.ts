import { BehaviorSubject, Subject } from "rxjs";
import { IGameSystem } from "./interfaces/IGameSystem";
import { Bet } from "./model/Bet";
import { GameStats } from "./model/GameStats";
import { PlayHistory } from "./model/PlayHistory";
import { ObjStyle } from "./styling/ObjStyle";
import { PieceNumberEnum } from "./enums/PieceNumberEnum";
import { BasicMartingGale } from "./model/systems/MartinGale/BasicMartingGale";
import { BasicMartingGaleBlack } from "./model/systems/MartinGale/BasicMartingGaleBlack";
import { BasicMartingGaleEven } from "./model/systems/MartinGale/BasicMartingGaleEven";
import { BasicMartingGaleOdd } from "./model/systems/MartinGale/BasicMartingGaleOdd";
import { BasicMartingGaleLower } from "./model/systems/MartinGale/BasicMartingGaleLower";
import { BasicMartingGaleUpper } from "./model/systems/MartinGale/BasicMartingGaleUpper";
import { BasicMoranello } from "./model/systems/BasicMoranello";

export default class BaseGame  {
    //#region Members

    public gameStats: GameStats = new GameStats(0.1);
    public history: PlayHistory[] = [];
    public playingSystems: IGameSystem[] = [];
    public mappedBets: Map<string, Bet[]> = new Map<string, Bet[]>();
    public bets: Bet[] = [];

    //#endregion Members

    //#region Observables

    public history$: BehaviorSubject<PlayHistory[]> = new BehaviorSubject <PlayHistory[]>([]);
    public stats$: BehaviorSubject<GameStats> = new BehaviorSubject <GameStats>(this.gameStats);
    public bets$: BehaviorSubject<Bet[]> = new BehaviorSubject<Bet[]>([]);

    //#endregion Observables
    
    //#region Constructor

    constructor() {
        // this.playingSystems.push(new BasicMartingGale());
        // this.playingSystems.push(new BasicMartingGaleBlack());
        // this.playingSystems.push(new BasicMartingGaleEven());
        // this.playingSystems.push(new BasicMartingGaleOdd());
        // this.playingSystems.push(new BasicMartingGaleLower());
        // this.playingSystems.push(new BasicMartingGaleUpper());
        this.playingSystems.push(new BasicMoranello());
        this.updateBets();
    }

    //#region Methods

    private incrementHistory(number: number): PlayHistory {
        return {
            Ballance: this.gameStats.Balance,
            Number: number,
            DiffBallance: this.gameStats.Balance - (this.history.length > 0
                ? this.history[this.history.length - 1].Ballance
                : 0),
            Color: ObjStyle.styles[number].Color
        };
    }    
    private merge(bets: Bet[][]): Bet[] {
        const retBets: Bet[] = [];

        bets.forEach(subBets => {
            subBets.forEach(bet => {
                const foundBet = retBets.find(t => t.Number == bet.Number);

                if (!foundBet) {
                    retBets.push(bet);
                } else {
                    foundBet.Units += bet.Units;
                }
            });
        });

        return retBets;
    }

    private updateHistory(number: number) {
        this.history.push(this.incrementHistory(number));
        this.history$.next(this.history);
    }

    private calcLosses(bets: Bet[]) {
        return bets.reduce((prv, bet) => prv + bet.Units, 0);
    } 
    private calcWinnings(bets: Bet[], winningNumber: number | null): number {
        // Can't use if (winningNumber)
        if (winningNumber == null) {
            return 0;
        }

        return bets.reduce((prv, bet) => {
            let betValue = 0;

            if (bet.Number >= 0 && bet.Number <= 36) {
                betValue = bet.Units * 36;
            } else {
                switch (bet.Number) {
                    case PieceNumberEnum.OutLower:
                        betValue = winningNumber > 0
                                && winningNumber <= 18
                            ? Math.round(bet.Units * 200) / 100
                            : 0;
                    break;
                    case PieceNumberEnum.OutEven:
                        betValue = winningNumber > 0
                                && winningNumber % 2 == 0
                            ? Math.round(bet.Units * 200) / 100
                            : 0;
                    break;
                    case PieceNumberEnum.OutRed:
                        betValue = ObjStyle.reds.indexOf(winningNumber) >= 0
                            ? Math.round(bet.Units * 200) / 100
                            : 0;
                    break;
                    case PieceNumberEnum.OutBlack:
                        betValue = winningNumber > 0 
                                && ObjStyle.reds.indexOf(winningNumber) < 0
                            ? Math.round(bet.Units * 200) / 100
                            : 0;
                    break;
                    case PieceNumberEnum.OutOdd:
                        betValue = winningNumber > 0
                                && winningNumber % 2 != 0
                            ? Math.round(bet.Units * 200) / 100
                            : 0;
                    break;
                    case PieceNumberEnum.OutUpper:
                        betValue = winningNumber > 0
                                && winningNumber >= 19
                            ? Math.round(bet.Units * 200) / 100
                            : 0;
                    break;
                }
            }

            return prv + betValue
        }, 0);
    }
    
    private updateStats(winNumber: number) {
        this.gameStats.Counter++;
        const lost = Math.round(this.calcLosses(this.bets) * this.gameStats.Unit * 100) / 100;
        const won =  Math.round(this.calcWinnings(this.bets, winNumber) * this.gameStats.Unit * 100) / 100;
        this.gameStats.Balance += won - lost;
        this.stats$.next(this.gameStats);
    }

    private updateBets(winningNumber: number | null = null) {
        this.bets = [];

        this.playingSystems.forEach(system => {
            const prevBets = this.mappedBets.get(system.getType()) ?? [];
            const sBets = system.getBets(prevBets, this.calcLosses(prevBets), this.calcWinnings(prevBets, winningNumber));

            this.mappedBets.set(system.getType(), sBets);
            sBets.forEach(bet => {
                const existingBet = this.bets.find(t => t.Number == bet.Number);

                if (existingBet) {
                    existingBet.Units += bet.Units;
                } else {
                    this.bets.push(bet);
                }
            });
        });

        this.bets$.next(this.bets);
    }

    //#endregion Methods

    //#region Methods

    public play(number: number) {
        this.updateStats(number);
        this.updateHistory(number);
        this.updateBets(number);
    }

    //#endregion Methods
}
