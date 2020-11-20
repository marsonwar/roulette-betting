import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

import { AppComponent } from './pages/shared/app.component';
import { SystemModule } from './pages/system/system.module';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';
import { StoreModule } from '@ngrx/store';
import { instanceReducer } from './data/reducers/Instace-reducer';
import { WidgetModule } from './widget/widget.module';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'play',
    component: PlayComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbThemeModule.forRoot(),
    BrowserAnimationsModule,
    SystemModule,
    StoreModule.forRoot({
      instance: instanceReducer
    }, {}),
    WidgetModule,
  ],
  exports: [
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
