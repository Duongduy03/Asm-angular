import { ProductService } from 'src/app/services/service.service';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Iproduct } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  product: Iproduct = {

    name: '',
    price: 0,
    image: '',
    description: '',
  };
  products!: Iproduct[];

  constructor(
    private router : Router,
    private productService: ProductService) {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      (response) => {
        alert("Thêm sản phẩm thành công")
        this.router.navigateByUrl('/admin')
        // Thực hiện các xử lý khác sau khi tạo sản phẩm thành công
      },
      (error) => {  
        console.log('An error occurred while creating product:', error);
        // Xử lý lỗi nếu có
      }
    );
  }
}
