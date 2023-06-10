import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
})
export class HeaderAdminComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
