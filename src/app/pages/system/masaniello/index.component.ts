import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { MasanielloSystem } from 'src/app/game-system/masaniello.system';

@Component({
  selector: "masaniello-index",
  templateUrl: "index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class MasanielloComponent  implements OnInit, OnDestroy {
  //#region Private Properties
  
  isCollapsed = true;
  masaniello: MasanielloSystem = new MasanielloSystem();
  //#endregion Private Properties

  //#region Constructor

  constructor() {
  }

  //#endregion Constructor

  //#region Events

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  //#endregion Events
}
