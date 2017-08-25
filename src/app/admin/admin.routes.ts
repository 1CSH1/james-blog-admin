import {Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {PostComponent} from "./post/post.component";
/**
 * Created by jamescsh on 8/9/17.
 */
export const adminRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "**",
    component: IndexComponent
  },
]
