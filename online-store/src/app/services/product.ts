import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    // Smartphones (5)
    {
      id: 1,
      name: 'iPhone 17 Pro',
      description: 'Latest Apple flagship.',
      price: 799990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=iPhone%2017%20Pro',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S25',
      description: 'Powerful Android smartphone with bright display.',
      price: 649990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Samsung%20Galaxy%20S25',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      description: 'Clean Android experience with excellent camera.',
      price: 499990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h13/86910660608030.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h13/86910660608030.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p96/pa0/64806074.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/peb/pa0/64806077.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Google%20Pixel%209',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Xiaomi 15 Ultra',
      description: 'Premium smartphone with fast charging and top cameras.',
      price: 459990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/p26/71079940.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/p26/71079940.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p6b/71080388.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5c/p68/71080391.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Xiaomi%2015%20Ultra',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 13',
      description: 'Fast and smooth flagship for everyday use.',
      price: 419990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p26/p35/54648242.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p26/p35/54648242.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0a/p35/54648243.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pee/p34/54648244.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=OnePlus%2013',
      likes: 0,
      categoryId: 1
    },

    // Laptops (5)
    {
      id: 6,
      name: 'MacBook Pro 14',
      description: 'Compact professional laptop with excellent battery life.',
      price: 1199990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/pee/62460021.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/peb/62460022.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/search/?text=MacBook%20Pro%2014',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Dell XPS 13',
      description: 'Slim ultrabook with premium build quality.',
      price: 899990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium',
      images: [
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Dell%20XPS%2013',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'ASUS ROG Zephyrus G16',
      description: 'Gaming laptop with powerful graphics performance.',
      price: 1099990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg?format=gallery-medium',
      images: [
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=ASUS%20ROG%20Zephyrus%20G16',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Lenovo ThinkPad X1 Carbon',
      description: 'Reliable business laptop with lightweight design.',
      price: 979990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd1/p6c/78361989.jpg?format=gallery-medium',
      images: [
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Lenovo%20ThinkPad%20X1%20Carbon',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HP Spectre x360',
      description: 'Convertible laptop for work and entertainment.',
      price: 829990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=gallery-medium',
      images: [
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg',
        'https://www.apple.com/v/macbook-pro/aw/images/overview/product-viewer/pv_hero_endframe__gc89p7dw1syi_large.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=HP%20Spectre%20x360',
      likes: 0,
      categoryId: 2
    },

    {
      id: 11,
      name: 'AirPods Pro 2',
      description: 'Wireless earbuds with active noise cancellation.',
      price: 149990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
      images: [
        'https://www.apple.com/v/airpods-pro/r/images/overview/product-viewer/closer_look_initial__cksqga5hm77m_large.jpg',
        'https://www.apple.com/v/airpods-pro/r/images/overview/product-viewer/closer_look_initial__cksqga5hm77m_large.jpg',
        'https://www.apple.com/v/airpods-pro/r/images/overview/product-viewer/closer_look_initial__cksqga5hm77m_large.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=AirPods%20Pro%202',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Over-ear headphones with premium sound quality.',
      price: 199990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: [
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Sony%20WH-1000XM5',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      description: 'Comfortable headphones with immersive sound.',
      price: 219990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h04/84919601987614.jpg?format=gallery-medium',
      images: [
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Bose%20QuietComfort%20Ultra',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'JBL Tune 770NC',
      description: 'Affordable wireless headphones with strong bass.',
      price: 79990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/hfb/82302375985182.jpg?format=gallery-medium',
      images: [
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp'
      ],
      link: 'https://kaspi.kz/shop/search/?text=JBL%20Tune%20770NC',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Marshall Major V',
      description: 'Stylish on-ear headphones with signature sound.',
      price: 99990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p92/8020134.jpg?format=gallery-medium',
      images: [
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp',
        'https://www.bose.com/dw/image/v2/BJRP_PRD/on/demandware.static/-/Sites-masterCatalog_Bose/default/dwc14ef111/images/hi-res/QCUH_Black_001_RGB.webp'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Marshall%20Major%20V',
      likes: 0,
      categoryId: 3
    },

    // Tablets (5)
    {
      id: 16,
      name: 'iPad Pro 13',
      description: 'High-performance tablet for creative professionals.',
      price: 699990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/hbe/86056856879134.jpg?format=preview-large',
      images: [
        'https://www.apple.com/v/ipad-pro/av/images/overview/ipados/hero_endframe__sg50vzdd6sqm_large.jpg',
        'https://www.apple.com/v/ipad-pro/av/images/overview/ipados/hero_endframe__sg50vzdd6sqm_large.jpg',
        'https://www.apple.com/v/ipad-pro/av/images/overview/ipados/hero_endframe__sg50vzdd6sqm_large.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=iPad%20Pro%2013',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S10',
      description: 'Android tablet with vivid display and pen support.',
      price: 429990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbc/p7a/70812416.png?format=preview-large',
      images: [
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Samsung%20Galaxy%20Tab%20S10',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad 7 Pro',
      description: 'Versatile tablet for multimedia and study.',
      price: 279990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p57/33647213.jpg?format=preview-large',
      images: [
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Xiaomi%20Pad%207%20Pro',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Lenovo Tab P12',
      description: 'Large-screen tablet for work, reading, and video.',
      price: 239990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h71/86618213711902.png?format=preview-large',
      images: [
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Lenovo%20Tab%20P12',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Huawei MatePad 11.5',
      description: 'Lightweight tablet with smooth display for daily tasks.',
      price: 199990,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/p5c/117029837.jpeg?format=preview-large',
      images: [
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366',
        'https://images.samsung.com/is/image/samsung/assets/us/tablets/galaxy-tab-s10/pcdcuts091624/Tablets-PCD_HD01_KV_PC.jpg?imwidth=1366'
      ],
      link: 'https://kaspi.kz/shop/search/?text=Huawei%20MatePad%2011.5',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  removeProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}

export type { Product };
