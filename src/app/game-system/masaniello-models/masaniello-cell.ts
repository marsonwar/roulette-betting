import { MasanielloColumnTypeEnum } from './masaniello-column-type.enum';
import { MasanielloCellStatusEnum } from './masaniello-cell-status.enum';

export class MasanielloCell {
    //#region Public Properties

    public value: string = "-2";
    public mutiplier: number = 0;
    public color: MasanielloColumnTypeEnum = MasanielloColumnTypeEnum.None;
    public status?: MasanielloCellStatusEnum = MasanielloCellStatusEnum.None;

    //#endregion Public Properties
}