import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

import { GameControlComponent } from './game-control/game-control.component';
import { GameStateComponent } from './game-state/game-state.component';

@NgModule({
    declarations: [
        GameControlComponent,
        GameStateComponent
    ],
    imports: [
        BrowserModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule
    ],
    exports: [
        GameControlComponent,
        GameStateComponent
    ]
})

export class WidgetModule { }
