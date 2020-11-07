import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

import { GameControlComponent } from './game-control/game-control.component';


@NgModule({
    declarations: [
        GameControlComponent
    ],
    exports: [
        GameControlComponent
    ],
    imports: [
        NbCardModule,
        NbInputModule,
        NbButtonModule,
    ]
})

export class WidgetModule { }
