import { Action } from '@ngrx/store';

export class InstanceActionModel implements Action {
    type: string;
    payload: any;
}