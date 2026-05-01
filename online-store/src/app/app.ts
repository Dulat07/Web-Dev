import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.categories;
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  removeProduct(productId: number) {
    this.productService.removeProduct(productId);
  }

  get filteredProducts(): Product[] {
    if (!this.selectedCategoryId) return [];
    return this.productService.getProductsByCategory(this.selectedCategoryId);
  }
}
