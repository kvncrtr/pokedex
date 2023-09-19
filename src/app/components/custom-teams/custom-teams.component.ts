import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { fetchUser, fetchUserSuccess } from 'src/app/shared/store/actions/user.actions';
import { userEffect } from 'src/app/shared/store/effects/user.effects';
import { UserState } from 'src/app/shared/store/reducers/user.reducers';

@Component({
  selector: 'app-custom-teams',
  templateUrl: './custom-teams.component.html',
  styleUrls: ['./custom-teams.component.css']
})
export class CustomTeamsComponent implements OnInit {
  
  constructor(
    private store: Store<UserState>,
    private user: UserService
  ) {}
  
  ngOnInit(): void {
    this.user.getUser().pipe(
      tap((user) => {
        this.store.dispatch(fetchUser({user}))
      })
    ).subscribe()
  }
}
