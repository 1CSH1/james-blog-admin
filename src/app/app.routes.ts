import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    loadChildren: "./admin/admin.module#AdminModule"
  }
]
