import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  onHandleSubmit() {
    const user = localStorage.getItem('credential');
    console.log(user);
    if (this.formSignin.valid) {
      this.auth.signin(this.formSignin.value).subscribe((data) => {
        localStorage.setItem('credential', JSON.stringify(data));

        alert('Đăng nhập thành công');
        const credential = this.auth?.isAuthenticated();
        if (credential?.user?.role == 'admin') {
          this.router.navigateByUrl('/admin');
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      });
    }
  }
}
