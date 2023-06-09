import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICate } from 'src/app/interfaces/category';
import { Iproduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  // selectedCategory: number = 2;
  products: any | undefined;
  categories: any | undefined;
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        const category = response.filter((item) => {
          item._id !== this.products.categoryId._id;
        });
        this.categories = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  formEdit = this.fb.group({
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
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {
    this.route.paramMap.subscribe((params: any) => {
      const id: any = params.get('id');
      this.productsService.getProduct(id).subscribe((product) => {
        this.products = product;
        this.formEdit.patchValue({
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          image1: product.image1,
          categoryId: product.categoryId,
        });
      });
    });
  }
  onHandleEdit() {
    console.log(this.products);
    console.log(this.categories);

    if (this.formEdit.valid) {
      const product: Iproduct = {
        _id: this.products._id,
        name: this.formEdit.value.name || '',
        price: this.formEdit.value.price || 0,
        description: this.formEdit.value.description || '',
        image: this.formEdit.value.image || '',
        image1: this.formEdit.value.image1 || '',
      };
      this.productsService.updateProduct(product).subscribe((data) => {
        alert('update sản phẩm thành công');
        this.router.navigateByUrl('/admin/products');
      });
    }
  }
}
