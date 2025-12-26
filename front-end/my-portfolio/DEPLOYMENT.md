# Deployment Guide

## Backend Setup (Django)

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=localhost,127.0.0.1,yourdomain.com
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

### 3. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Create Superuser

```bash
python manage.py createsuperuser
```

### 5. Collect Static Files

```bash
python manage.py collectstatic
```

### 6. Run Server

Development:
```bash
python manage.py runserver
```

Production (with Gunicorn):
```bash
gunicorn config.wsgi:application --bind 0.0.0.0:8000
```

## Frontend Setup (Next.js)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

For production, update to your production API URL.

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
npm start
```

## Docker Deployment

### 1. Build and Run with Docker Compose

```bash
docker-compose up --build
```

This will start:
- PostgreSQL database
- Django backend (port 8000)
- Next.js frontend (port 3000)
- Nginx reverse proxy (port 80)

### 2. Run Migrations in Docker

```bash
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
```

## Production Checklist

- [ ] Set `DEBUG=False` in Django settings
- [ ] Configure proper `SECRET_KEY`
- [ ] Set up SSL certificates
- [ ] Configure CORS properly
- [ ] Set up database backups
- [ ] Configure static file serving
- [ ] Set up monitoring and logging
- [ ] Configure firewall rules
- [ ] Set up automated backups
- [ ] Test all API endpoints
- [ ] Test admin dashboard functionality

## Environment Variables Reference

### Backend (.env)
- `SECRET_KEY`: Django secret key
- `DEBUG`: Debug mode (True/False)
- `ALLOWED_HOSTS`: Comma-separated list of allowed hosts
- `DATABASE_URL`: PostgreSQL connection string
- `CORS_ALLOWED_ORIGINS`: Comma-separated list of allowed origins

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL`: Django backend API URL
