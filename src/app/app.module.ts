import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbButtonModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

import { AppComponent } from './pages/shared/app.component';

const routes: Routes = [{ path: '', component: AppComponent },];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbThemeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
