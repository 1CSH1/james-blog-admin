import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    AdminModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
