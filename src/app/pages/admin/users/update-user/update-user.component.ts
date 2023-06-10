import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  user!: IUser;
  formEdit = this.fb.group(
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
    },
    { Validators: this.checkPassword }
  );
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
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param) => {
      const id: any = param.get('id');

      this.auth.getUser(id).subscribe((users) => {
        // Sản phẩm dựa theo ID
        this.user = users.user;

        this.formEdit.patchValue({
          name: users.user.name,
          email: users.user.email,
          password: users.user.password,
          // confirmPass: users.user.confirmPass,
        });
      });
    });
  }
  onHandleEdit() {
    // console.log(this.user);

    if (this.formEdit.valid) {
      const user: any = {
        _id: this.user._id,
        name: this.formEdit.value.name || '',
        email: this.formEdit.value.email || '',
        password: this.formEdit.value.password || '',
      };
      console.log(user._id);

      this.auth.updateUser(user._id, user).subscribe((data) => {
        alert('Update user thành công');
        this.router.navigateByUrl('/admin/users');
      });
    }
  }
}
