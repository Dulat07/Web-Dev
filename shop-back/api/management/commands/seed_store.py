from django.core.management.base import BaseCommand

from api.models import Category, Product


class Command(BaseCommand):
    help = "Seed the database with sample categories and products."

    def handle(self, *args, **options):
        sample_data = {
            "Smartphones": [
                {
                    "name": "Galaxy S24",
                    "price": 899.99,
                    "description": "Flagship Android phone with a bright AMOLED display.",
                    "count": 14,
                    "is_active": True,
                },
                {
                    "name": "iPhone 15",
                    "price": 999.0,
                    "description": "Apple smartphone with strong cameras and performance.",
                    "count": 10,
                    "is_active": True,
                },
                {
                    "name": "Pixel 9",
                    "price": 799.5,
                    "description": "Google phone focused on camera and AI features.",
                    "count": 9,
                    "is_active": True,
                },
                {
                    "name": "Nothing Phone 2",
                    "price": 649.99,
                    "description": "Distinctive smartphone with glyph lighting and clean software.",
                    "count": 8,
                    "is_active": True,
                },
                {
                    "name": "Xiaomi 14",
                    "price": 749.0,
                    "description": "Compact smartphone with premium build and fast charging.",
                    "count": 12,
                    "is_active": True,
                },
            ],
            "Laptops": [
                {
                    "name": "MacBook Air M3",
                    "price": 1099.0,
                    "description": "Lightweight laptop with M3 chip and all-day battery.",
                    "count": 7,
                    "is_active": True,
                },
                {
                    "name": "Dell XPS 13",
                    "price": 1299.99,
                    "description": "Ultra-portable laptop with premium build and performance.",
                    "count": 5,
                    "is_active": True,
                },
                {
                    "name": "ThinkPad X1 Carbon",
                    "price": 1499.0,
                    "description": "Business laptop with legendary keyboard and durability.",
                    "count": 4,
                    "is_active": True,
                },
                {
                    "name": "Surface Laptop 5",
                    "price": 1199.99,
                    "description": "Windows laptop with touchscreen and sleek design.",
                    "count": 6,
                    "is_active": True,
                },
                {
                    "name": "ASUS ROG Zephyrus G14",
                    "price": 1599.0,
                    "description": "Gaming laptop with AMD Ryzen and RTX graphics.",
                    "count": 3,
                    "is_active": True,
                },
            ],
        }

        for category_name, products in sample_data.items():
            category, created = Category.objects.get_or_create(name=category_name)
            if created:
                self.stdout.write(f"Created category: {category_name}")

            for product_data in products:
                product, created = Product.objects.get_or_create(
                    name=product_data["name"],
                    defaults={
                        "price": product_data["price"],
                        "description": product_data["description"],
                        "count": product_data["count"],
                        "is_active": product_data["is_active"],
                        "category": category,
                    },
                )
                if created:
                    self.stdout.write(f"Created product: {product_data['name']}")

        self.stdout.write("Seeding completed!")