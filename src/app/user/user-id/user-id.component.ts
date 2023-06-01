import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.scss']
})
export class UserIdComponent {
  user!: User;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');

    if (userId) {
      this._userService.getUser(parseInt(userId, 10)).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}

