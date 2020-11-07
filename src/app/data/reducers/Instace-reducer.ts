import { InstanceActionModel } from '../action-model/instance-action';
import { ActionTypes } from '../actions/Instance-action';
import { GameModel } from '../models/game-model';
import { InstanceModel } from '../models/instance-model';


//#region Private Methods

function calculateTotal(games: GameModel[]): number {
    let total: number = 0;

    games.forEach(game => {
        total += game.Balance;
    });

    return total;
}

//#endregion Private Methods

//#region Public Properties

export const instance = new InstanceModel();

//#endregion

//#region Public Methods

export function instanceReducer(state = instance, action: InstanceActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.Games.push(action.payload);
                state.TotalBalance = calculateTotal(state.Games);

                console.log(state);
                return state;
            };

        case ActionTypes.Remove:
            {
                const index = state.Games.indexOf(action.payload);
                state.Games.splice(index, 1);
                state.TotalBalance = calculateTotal(state.Games);

                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new InstanceModel();
                state.TotalBalance = calculateTotal(state.Games);

                console.log(state);
                return state;
            }

        default:
            return state;
    }
}

//#endregion Public Methods