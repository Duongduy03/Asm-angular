import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  {
  product!: Iproduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    image: [''],
    description: [''],
  })
  constructor(
    private router : Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      const id:any = param.get('id');
      this.productService.getProductById(id).subscribe(product => {
        // Sản phẩm dựa theo ID
        this.product = product;

        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          image: product.image,
          description: product.description,
        })
      })
    })

  }
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: Iproduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        image: this.productForm.value.image || '',
        description: this.productForm.value.description || '',
      }

      this.productService.updateProduct(product).subscribe(data => {
        alert("Update sản phẩm thành công")
        this.router.navigateByUrl('/admin')
      })
    }

  }
}
