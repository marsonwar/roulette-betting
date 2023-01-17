import { Component } from '@angular/core';
import BaseGame from 'src/games/BaseGame';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    //#region Members

    public game: BaseGame  = new BaseGame();

    //#endregion Members

    //#region Members

    public onPlayClick() {
        const r = Math.floor(Math.random() * 36);
        this.game.play(r);
    }

    //#endregion Members
}