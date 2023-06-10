import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  users: any | undefined;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.auth.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteUser(userId: string) {
    const confirm = window.confirm('Bạn có chắc muốn xóa không ?');
    if (confirm) {
      this.auth.deleteUser(userId).subscribe(() => {
        this.users = this.users?.filter((user: any) => user._id !== userId);
      });
    }
  }
}
