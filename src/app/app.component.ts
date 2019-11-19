import {
  Component,
  OnInit,
  Renderer,
  HostListener,
  Inject,
  OnDestroy
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import noUiSlider from "nouislider";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  //#region Properties

  isCollapsed = true;

  //#endregion Properties


  //#region Constructor

  constructor(
    private renderer: Renderer,
    public location: Location,
    @Inject(DOCUMENT) document
  ) {}
  
  //#endregion Constructor
  
  //#region Events

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-info");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-info");
      }
    }
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    this.onWindowScroll(event);
  }
  
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  //#endregion Events

  //#region Methods
  
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  //#endregion Methods
}
