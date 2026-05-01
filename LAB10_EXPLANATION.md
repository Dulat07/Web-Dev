# Lab 10 Explanation

## What Lab 10 is about

Lab 10 shows how to build the same REST API in several DRF styles, starting from simple function-based views and moving to more powerful generic views.

## What CRUD means

- `Create`: add a new object
- `Read`: get one object or a list of objects
- `Update`: change an existing object
- `Delete`: remove an object

## Project structure

- `api/models.py`: `Category` and `Product` models
- `api/serializers.py`: `CategorySerializer` and `ProductSerializer`
- `api/urls.py`: API routes
- `api/views/fbv.py`: Level 2 Function-Based Views
- `api/views/cbv.py`: Level 3 `APIView` classes
- `api/views/mixins.py`: Level 4 DRF mixins
- `api/views/generics.py`: Level 5 DRF generic views
- `api/views/__init__.py`: chooses which level is active

## Levels

| Level | File | Main idea | Active? |
|---|---|---|---|
| Level 2 | api/views/fbv.py | Function-Based Views | No |
| Level 3 | api/views/cbv.py | APIView classes | No |
| Level 4 | api/views/mixins.py | DRF mixins | No |
| Level 5 | api/views/generics.py | DRF generic views | Yes |

## Where each level is located

### Level 2

File: `api/views/fbv.py`

Contains:

- `products_list`
- `product_detail`

### Level 3

File: `api/views/cbv.py`

Contains:

- `ProductListAPIView`
- `ProductDetailAPIView`

### Level 4

File: `api/views/mixins.py`

Contains:

- `ProductListAPIView`
- `ProductDetailAPIView`

### Level 5

File: `api/views/generics.py`

Contains:

- `ProductListAPIView`
- `ProductDetailAPIView`
- `CategoryListAPIView`
- `CategoryDetailAPIView`
- `CategoryProductsAPIView`

## Which level is active

Level 5 is active.

## Why `api/views/__init__.py` controls the active level

`api/urls.py` imports from `api import views`. That means `api/views/__init__.py` decides which classes are exposed as the current implementation.

## Why `urls.py` uses `.as_view()`

Class-based views must be converted into callable views with `.as_view()`. This is why Levels 3, 4, and 5 use `.as_view()` in `api/urls.py`.

## How to switch levels

- For Level 5, keep imports in `api/views/__init__.py` from `generics.py`
- For Level 4, import product views from `mixins.py`
- For Level 3, import product views from `cbv.py`
- For Level 2, update `api/urls.py` to use `products_list` and `product_detail` directly without `.as_view()`

## Postman testing

Base URL:

`http://127.0.0.1:8000/api/`

Products:

- `GET /products/`
- `POST /products/`
- `GET /products/<product_id>/`
- `PUT /products/<product_id>/`
- `PATCH /products/<product_id>/`
- `DELETE /products/<product_id>/`

Categories:

- `GET /categories/`
- `POST /categories/`
- `GET /categories/<category_id>/`
- `PUT /categories/<category_id>/`
- `PATCH /categories/<category_id>/`
- `DELETE /categories/<category_id>/`

Custom endpoint:

- `GET /categories/<category_id>/products/`
