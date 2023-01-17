import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { GameStats } from 'src/games/model/GameStats';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
    //#region Inputs

    @Input()
    public stats$: Subject<GameStats> | null = null;

    //#endregion Inputs
    
    //#region Members

    public stats: GameStats | null = null;

    //#endregion Inputs

    //#region ngInit 

    ngOnInit() {
        if (this.stats$) {
            this.stats$?.subscribe(newValue => {
                this.stats = newValue;
            });
        }

    }

    //#endregion ngInit 
}