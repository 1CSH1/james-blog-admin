import {Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
/**
 * Created by jamescsh on 8/9/17.
 */
export const adminRoutes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full"
  },
  {
    path: "index",
    component: IndexComponent
  }
]
