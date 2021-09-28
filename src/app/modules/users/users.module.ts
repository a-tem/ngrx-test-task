import { NgModule } from "@angular/core";

import { SharedModule } from "../index";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent, UserItemComponent, UserDetailsComponent } from "./components";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "./_store/users.effects";
import { UsersService } from "./services";

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersService],
  declarations: [UsersListComponent, UserItemComponent, UserDetailsComponent],
  exports: [UsersListComponent]
})
export class UsersModule {}
