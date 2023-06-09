import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICate } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  categories: any[] | undefined;
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  formAdd = this.fb.group({
    name: ['', [Validators.required]],
    price: [
      '',
      [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')],
    ],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    image1: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}
  onHandleSubmit() {
    if (this.formAdd.valid) {
      this.productService
        .createProduct(this.formAdd.value)
        .subscribe((data) => {
          console.log(data);
          this.router.navigateByUrl('/admin/products');
        });
    }
  }
}
