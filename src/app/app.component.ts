import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './_state/app.reducer';

import * as LayoutActions from './_state/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-test-task';

  constructor(private state: Store<IAppState>) {
    this.state.dispatch(LayoutActions.setLayoutLoading());
  }
}
