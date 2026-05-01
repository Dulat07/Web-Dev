# Lab 10 Online Shop API

Standalone Django REST Framework project for Web Development Lab 10.

## Run

```bash
cd /Users/dulatamangeldiev/Desktop/lab-10
/Users/dulatamangeldiev/Desktop/WebProject/shanyraq2/.venv/bin/python manage.py migrate
/Users/dulatamangeldiev/Desktop/WebProject/shanyraq2/.venv/bin/python manage.py runserver
```

## Base URL

`http://127.0.0.1:8000/api/`

## Endpoints

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

Custom:

- `GET /categories/<category_id>/products/`
