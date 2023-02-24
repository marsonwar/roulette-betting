import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject, Subject } from 'rxjs';
import { PieceNumberEnum } from 'src/games/enums/PieceNumberEnum';
import { Bet } from 'src/games/model/Bet';
import { GameStats } from 'src/games/model/GameStats';
import { ObjStyle } from 'src/games/styling/ObjStyle';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    //#region Consts

    private reds: number[] = [...ObjStyle.reds, PieceNumberEnum.OutRed];
    private binded: boolean = false;

    //#endregion Consts

    //#region Inputs

    @Input()
    public bets$: Subject<Bet[]> | null = null;
    @Input()
    public stats$: Subject<GameStats> | null = null;
    @Input()
    public play: any = null;

    //#endregion Inputs

    //#region Members

    public bets: Bet[] = [];
    public totalBet: number = 0;
    public gameStats: GameStats | null = null;

    //#endregion Inputs

    //#region Constructor

    constructor(private sanitizer: DomSanitizer
        , private elRef:ElementRef) {
    }

    //#endregion Constructor

    //#region  Methods

    private generatePiece(index: PieceNumberEnum): string {
        const redCss = this.reds.indexOf(index) >= 0 ? ' red' : ''
            , greeCss = index == 0 || index > 36 && index != PieceNumberEnum.OutBlack ? ' high' : ''
            , betCss = this.getBet(index) != null ? ' bet' : ''
            , bet = this.getBet(index);
        let styles = ''
            , text = index.toString()
            , click = '';

        switch (index) {
            case 0:
                styles = `rowspan='5'`;
                break;
            case 37:
            case 38:
            case 39:
                text = '3 para 1';
                break;
            case 40:
                styles = `colspan='4'`;
                text = '1ª Dúzia';
                break;
            case 41:
                styles = `colspan='4'`;
                text = '2ª Dúzia';
                break;
            case 42:
                styles = `colspan='4'`;
                text = '3ª Dúzia';
                break;
            case 43:
                styles = `colspan='2'`;
                text = '1 - 18';
                break;
            case 44:
                styles = `colspan='2'`;
                text = 'Par';
                break;
            case 45:
                styles = `colspan='2'`;
                text = 'Red';
                break;
            case 46:
                styles = `colspan='2'`;
                text = 'Black';
                break;
            case 47:
                styles = `colspan='2'`;
                text = 'Ímpar';
                break;
            case 48:
                styles = `colspan='2'`;
                text = '19 - 36';
                break;
        }

        if (index < 37) {
            click = ` clickable id='${index}'`;
        }

        text += bet 
            ? `<br />${bet.Units * (this.gameStats?.Unit ?? 1) } €`
            : `<br />-`;

        return (`<td ${click}class="game${redCss}${greeCss}${betCss}" ${styles}>${text}</td>`);
    }

    public getBet(piece: PieceNumberEnum): Bet | undefined {
        return this.bets.find(t => t.Number == piece);
    }

    public getTdTemplate(startPiece: PieceNumberEnum, endPiece: PieceNumberEnum, step: number): SafeHtml {
        let pieces: string[] = [];

        for (let index = startPiece; index <= endPiece; index += step) {
            pieces.push(this.generatePiece(index));
        }

        return this.sanitizer.bypassSecurityTrustHtml(pieces.join(''));
    }

    //#endregion  Methods

    //#region Events

    private onClick(n: any) {
        console.log(n);
        this.play(n);
    }

    ngOnInit() {
        if (this.bets$) {
            this.bets$?.subscribe(newValue => {
                this.bets = newValue;
                this.totalBet = this.bets.reduce((prv, curr) => prv + curr.Units, 0) * (this.gameStats?.Unit ?? 0);
            });
        }
        if (this.stats$) {
            this.stats$?.subscribe(newValue => {
                this.gameStats = newValue;
            });
        }
    }

    ngAfterViewChecked() {
        if (!this.binded) {
            // assume dynamic HTML was added before
            let objs = this.elRef.nativeElement.querySelector('[clickable]');

            if (objs) {
                this.binded = true;
                
                objs.addEventListener('onclick', (e: any) => console.log(1), false);
            }
        }
    }

    //#endregion Events
}