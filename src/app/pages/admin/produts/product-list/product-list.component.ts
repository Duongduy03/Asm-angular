import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: any[] | undefined;

  mess: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  search(searchValue: string) {
    let searchData: any = this.products?.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    if (searchData.length > 0) {
      this.products = searchData;
    } else {
      this.products = [];
      this.mess = 'khong tim thay san pham nao';
    }
  }
  navigateToDetail(productId: string) {
    this.router.navigate(['/products/' + productId]);
  }

  deleteProduct(productId: string) {
    const confirm = window.confirm('Bạn có chắc muốn xóa không ?');
    if (confirm) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.products = this.products?.filter(
          (product) => product._id !== productId
        );
      });
    }
  }
}
