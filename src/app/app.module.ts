import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './home/table/tablecomponent';
import { HistoryComponent } from './home/history/history.component';
import { StatsComponent } from './home/stats/stats.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TableComponent,
        HistoryComponent,
        StatsComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }