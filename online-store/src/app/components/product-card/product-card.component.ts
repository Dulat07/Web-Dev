import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  currentImageIndex = 0;

  get galleryImages(): string[] {
    if (!this.product) {
      return [];
    }

    return this.product.images?.length ? this.product.images : [this.product.image];
  }

  get currentImage(): string {
    return this.galleryImages[this.currentImageIndex] ?? this.product.image;
  }

  like() {
    this.product.likes++;
  }

  showPreviousImage() {
    const total = this.galleryImages.length;

    if (total <= 1) {
      return;
    }

    this.currentImageIndex = (this.currentImageIndex - 1 + total) % total;
  }

  showNextImage() {
    const total = this.galleryImages.length;

    if (total <= 1) {
      return;
    }

    this.currentImageIndex = (this.currentImageIndex + 1) % total;
  }

  deleteProduct() {
    this.delete.emit(this.product.id);
  }
}
