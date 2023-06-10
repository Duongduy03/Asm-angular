import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  user!: IUser;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((param) => {
      const id: any = param.get('id');
      // console.log(id);

      this.auth.getUser(id).subscribe(
        (user) => {
          // console.log(user);

          this.user = user.user;
        },
        (error) => console.log(error.message)
      );
    });
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
