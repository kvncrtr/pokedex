import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  constructor(
    private auth: AuthService,
    private stroage: StorageService
  ) {}

  logOut() {
    this.stroage.clearData()
  }
}
