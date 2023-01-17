import { Bet } from "../model/Bet";

export interface IGameSystem {
    getType() : string;
    getBets(previousBet: Bet[] | undefined, losses: number, prize: number) : Bet[];
}