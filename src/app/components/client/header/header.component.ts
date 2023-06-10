import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: any = {};
  constructor(private auth: AuthService) {
    const credential = JSON.parse(localStorage.getItem('credential') as string);
    // const credential = localStorage.getItem('credential');
    this.user = credential;
    console.log(credential);
  }
}
