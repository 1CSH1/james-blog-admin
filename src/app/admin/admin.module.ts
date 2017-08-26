import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import {RouterModule} from "@angular/router";
import {adminRoutes} from "./admin.routes";
import { PostComponent } from './post/post.component';
import {SharedModule} from "../shared/shared.module";
import {MdEditorComponent} from "./post/md-editor/md-editor.component";
import {NgbButtonsModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TagService} from "./tag/tag.service";
import {CategoryService} from "./category/category.service";
import {PostService} from "./post/post.service";
import {FileUploadModule} from "ng2-file-upload";

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    RouterModule.forChild(adminRoutes),
    NgbModule.forRoot(),
    NgbButtonsModule.forRoot(),
    FileUploadModule
  ],
  declarations: [
    IndexComponent,
    PostComponent,
    MdEditorComponent
  ],
  providers: [
    TagService,
    CategoryService,
    PostService
  ]
})
export class AdminModule { }
