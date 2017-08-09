import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    IndexComponent
  ]
})
export class AdminModule { }
