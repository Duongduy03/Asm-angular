import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICate } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent {
  category!: ICate;
  formEdit = this.fb.group({
    name: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private cate: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param) => {
      const id: any = param.get('id');
      this.cate.getCate(id).subscribe((cate) => {
        // Sản phẩm dựa theo ID
        this.category = cate;

        this.formEdit.patchValue({
          name: cate.name,
        });
      });
    });
  }
  onHandleEdit() {
    if (this.formEdit.valid) {
      const cate: ICate = {
        _id: this.category._id,
        name: this.formEdit.value.name || '',
      };

      this.cate.updateCate(cate).subscribe((data) => {
        alert('Update sản phẩm thành công');
        this.router.navigateByUrl('/admin/categories');
      });
    }
  }
}
