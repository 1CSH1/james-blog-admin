import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.routes";
import { PostComponent } from './post/post.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    IndexComponent,
    PostComponent
  ]
})
export class AdminModule { }
