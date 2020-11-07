import { NgModule } from '@angular/core';
import { MasanielloComponent } from './masaniello/index.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({ 
    imports: [
        BrowserModule,
        RouterModule,
    ],
    declarations: [
        MasanielloComponent
    ],
    exports: [
        MasanielloComponent
    ]
})

export class SystemModule {}