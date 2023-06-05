import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
})
export class ListproductComponent {
  products: any[] | undefined;
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

  navigateToDetail(productId: string) {
    this.router.navigate(['/products/' + productId]);
  }

  deleteProduct(productId: string) {
    this.router.navigate(['/', productId]);
  }
}
