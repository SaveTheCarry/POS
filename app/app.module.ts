import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OS1buttons} from '../buttons/OS1buttons.component';
import {OSbuttons2} from '../buttons/OS2buttons.component';
import {OSbuttons3} from '../buttons/OSbuttons3.componet';
import {OSbuttons4} from '../buttons/OSbuttons4.component';
import {OSbuttons5} from '../buttons/OSbuttons5.component';
import {OSbuttons6} from '../buttons/OSbuttons6.component';
import {ButtonComponent} from '../button/button.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    OS1buttons,
    OSbuttons2,
    OSbuttons3,
    OSbuttons4,
    OSbuttons5,
    OSbuttons6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
