import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users!: User[];
  sud: boolean = false;
  getUsersSubscription!: Subscription;
  selectedUserId: number | null = null;

  constructor(private _UserService : UserService, private _router : Router) {}

  ngOnInit() : void{
    this.getUsersSubscription = this._UserService.getUsers().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        
        this.users = res.results;
        console.log(this.users);
        
      },
      error : (err) => {
        console.log("ERROR", err);
        
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
  }
  showUserDetails(userId: number): void {
    this.selectedUserId = this.selectedUserId === userId ? null : userId;
  }
  
  deleteUser(toDelete: number): void {
    this._UserService.deleteUser(toDelete).subscribe({
      next: (res) => {
        console.log("NEXT : ", res);
      },
      error: (err) => {
        console.error("Error deleting user:", err);
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
  }
  ngOnDestroy(): void {
    this.getUsersSubscription.unsubscribe();
  }
}
