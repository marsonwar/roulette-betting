import { Component } from "@angular/core";
import { MasanielloSystem } from 'src/app/game-system/masaniello.system';

@Component({
  selector: "masaniello-index",
  templateUrl: "index.component.html",
  styleUrls: ["./index.component.scss"]
})

export class MasanielloComponent {
  //#region Private Properties
  
  isCollapsed = true;
  masaniello: MasanielloSystem = new MasanielloSystem();

  //#endregion Private Properties
}
