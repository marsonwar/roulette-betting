import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { InstanceModel } from 'src/app/data/models/instance-model';

import { BaseWidget } from '../base-widget';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.sass']
})

export class GameStateComponent extends BaseWidget {
  //#region Private Members

  games$: any;

  //#endregion Private Members

  //#region Constructor

  constructor(store: Store<InstanceModel>) {
    super();
    
    this.games$ = store.pipe(select(a => a.Games));
  }

  //#endregion
}
