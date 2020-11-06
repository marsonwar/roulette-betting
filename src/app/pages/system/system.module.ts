import { NgModule } from '@angular/core';
import { MasanielloComponent } from './masaniello/index.component';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({ 
    imports: [
        BrowserModule,
        CollapseModule,
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
