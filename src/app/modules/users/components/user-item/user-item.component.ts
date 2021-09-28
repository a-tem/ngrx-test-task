import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { IUser } from "src/app/models";
import * as fromUsers from "../../_store";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.html',
  styleUrls: ['./user-item.scss']
})
export class UserItemComponent {
  @Input() user: IUser | null = null;
  @Output() selectUser = new EventEmitter<number>();

  constructor(private state: Store<fromUsers.IUsersState>) {}

  onSelectUser(userId: number) {
    this.selectUser.emit(userId);
  }
}
