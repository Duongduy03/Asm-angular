import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  formAdd = this.fb.group({
    name: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private cate: CategoryService,
    private router: Router
  ) {}
  onHandleSubmit() {
    if (this.formAdd.valid) {
      this.cate.createCate(this.formAdd.value).subscribe((data) => {
        console.log(data);
        alert('thêm sản phẩm thành công');
        this.router.navigateByUrl('/admin/categories');
      });
    }
  }
}
