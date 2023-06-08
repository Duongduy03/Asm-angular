import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
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
      return { mismatch: true }; // Return an object with 'mismatch' error key if passwords do not match
    }
  }
  constructor(private fb: FormBuilder, private auth: AuthService) {}
  onHandleSubmit() {
    console.log(this.formSignup.value);

    if (this.formSignup.valid) {
      this.auth.signup(this.formSignup.value).subscribe((data) => {
        console.log(data);
      });
    } else {
    }
  }
}
