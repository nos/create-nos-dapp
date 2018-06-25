import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header.component";
import { SpinningLogoComponent } from "./spinning-logo.component";
import { NosActionsComponent } from "./nos-actions.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinningLogoComponent,
    NosActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
