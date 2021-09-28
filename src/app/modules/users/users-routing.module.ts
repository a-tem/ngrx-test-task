import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent, UserDetailsComponent } from "./components";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersListComponent
  },
  {
    path: 'user/:id',
    pathMatch: 'full',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
