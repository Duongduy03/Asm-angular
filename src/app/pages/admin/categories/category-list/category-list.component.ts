import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories: any[] | undefined;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
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
  deleteCategory(cateId: string) {
    const confirm = window.confirm('Bạn có chắc muốn xóa không ?');
    if (confirm) {
      this.categoryService.deleteCate(cateId).subscribe(() => {
        this.categories = this.categories?.filter(
          (cate) => cate._id !== cateId
        );
      });
    }
  }
}
