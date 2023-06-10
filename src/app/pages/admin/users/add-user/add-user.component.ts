import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  formSignup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.pattern(/^\S*$/)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^\S*$/),
        ],
      ],
      confirmPass: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
    },
    { Validators: this.checkPassword }
  );

  // private checkPassword(group: FormGroup) {
  //   const password = group.get('password')?.value;
  //   const confirmPassword = group.get('confirmPass')?.value;

  //   if (password === confirmPassword) {
  //     group.get('confirmPass')?.setErrors(null);
  //   } else {
  //     group.get('confirmPass')?.setErrors({ mismatch: true });
  //   }
  // }
  private checkPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPass')?.value;

    if (password === confirmPassword) {
      return null; // Return null if passwords match
    } else {
      return { passwordMismatch: true }; // Return an object with 'mismatch' error key if passwords do not match
    }
  }
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  onHandleSubmit() {
    console.log(this.formSignup.value);
    // const user = localStorage.getItem('');
    if (this.formSignup.valid) {
      this.auth.signup(this.formSignup.value).subscribe((data) => {
        // alert(error.response.data.message);
        alert('Đăng ký thành công');
        this.router.navigateByUrl('/admin/users');
        console.log(data);
      });
    } else {
    }
  }
}
