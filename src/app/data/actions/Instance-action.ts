import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
}

export const Add = (game: any) => {
    return <Action>{ type: ActionTypes.Add, payload: game };
}

export const Remove = (game: any) => {
    return <Action>{ type: ActionTypes.Remove, payload: game };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}