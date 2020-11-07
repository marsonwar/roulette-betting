import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Observable } from 'rxjs';
import {  select, Store } from '@ngrx/store';

import { InstanceModel } from 'src/app/data/models/instance-model';
import { GameModel } from 'src/app/data/models/game-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  //#region Properties

  balance$: Observable<number>;
  menuItems: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Play',
      link: '/play'
    }
  ];

  //#endregion Properties

  //#region Constructor

  constructor(store: Store<InstanceModel>) {
    this.balance$ = store.pipe(select(a => a.TotalBalance));
  }

  //#endregion
}
