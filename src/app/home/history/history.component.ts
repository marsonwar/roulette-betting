import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlayHistory } from 'src/games/model/PlayHistory';
import { ObjStyle } from 'src/games/styling/ObjStyle';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    //#region Inputs

    @Input()
    public history$: BehaviorSubject<PlayHistory[]> | null = null;

    //#endregion Inputs

    //#region Members

    public history: PlayHistory[] = [];
    styles: ObjStyle[] = [];

    //#endregion Inputs

    //#region ngInit 

    ngOnInit() {
        if (this.history$) {
            this.history$?.subscribe(newValue => {
                this.history = newValue;
            });
        }
    }

    //#endregion ngInit 
}