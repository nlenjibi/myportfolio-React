# Portfolio Backend API

Django REST Framework API for portfolio management system.

## Setup Instructions

### 1. Create Virtual Environment

```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Database Setup

Make sure PostgreSQL is installed and running. Create a database:

```bash
psql -U postgres
CREATE DATABASE portfolio_db;
\q
```

### 4. Environment Variables

Create a `.env` file in the backend directory:

```env
DEBUG=True
DJANGO_SECRET_KEY=your-secret-key-here
DB_NAME=portfolio_db
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432
```

### 5. Run Migrations

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

### 6. Create Superuser

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account.

### 7. Run Development Server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000/api/`

## API Endpoints

### Public Endpoints (Read-only)

- `GET /api/intro/` - Get intro/hero section data
- `GET /api/about/` - Get about section data
- `GET /api/skills/` - Get all skills
- `GET /api/skills/by_category/` - Get skills grouped by category
- `GET /api/resume/` - Get resume information
- `GET /api/education/` - Get education history
- `GET /api/experience/` - Get work experience
- `GET /api/portfolio/` - Get all projects
- `GET /api/portfolio/featured/` - Get featured projects only
- `GET /api/services/` - Get services offered
- `GET /api/testimonials/` - Get testimonials
- `GET /api/interests/` - Get interests
- `POST /api/contact/` - Submit contact form (public)

### Admin Endpoints (Requires Authentication)

All endpoints support full CRUD operations (GET, POST, PUT, PATCH, DELETE) for authenticated admin users:

- `/api/intro/` - Manage intro section
- `/api/about/` - Manage about section
- `/api/skills/` - Manage skills
- `/api/resume/` - Manage resume
- `/api/education/` - Manage education
- `/api/experience/` - Manage experience
- `/api/portfolio/` - Manage portfolio projects
- `/api/services/` - Manage services
- `/api/testimonials/` - Manage testimonials
- `/api/interests/` - Manage interests
- `/api/contact/` - View and manage contact messages

### Authentication

To get an authentication token:

```bash
POST /api/token-auth/
{
    "username": "your-username",
    "password": "your-password"
}
```

Use the token in subsequent requests:

```
Authorization: Token your-token-here
```

## Project Structure

```
backend/
├── config/              # Project configuration
│   ├── settings.py      # Django settings
│   ├── urls.py          # Root URL configuration
│   └── wsgi.py          # WSGI configuration
├── portfolio/           # Main app
│   ├── models.py        # Database models (11 modules)
│   ├── serializers.py   # DRF serializers
│   ├── views.py         # API views
│   ├── urls.py          # App URL configuration
│   └── admin.py         # Django admin configuration
├── manage.py            # Django management script
└── requirements.txt     # Python dependencies
```

## Testing the API

You can test the API using:

1. **Django Admin Panel**: `http://localhost:8000/admin/`
2. **Browsable API**: Visit any endpoint in your browser
3. **cURL or Postman**: Make direct HTTP requests

Example cURL command:

```bash
# Get all skills
curl http://localhost:8000/api/skills/

# Create a new skill (requires authentication)
curl -X POST http://localhost:8000/api/skills/ \
  -H "Authorization: Token your-token-here" \
  -H "Content-Type: application/json" \
  -d '{"name": "React", "category": "Frontend", "proficiency": 90}'
```

## Next Steps

1. Configure your Next.js frontend to connect to `http://localhost:8000/api/`
2. Add sample data through the Django admin panel
3. Customize models as needed for your specific requirements
4. Deploy to production (Railway, Heroku, DigitalOcean, etc.)
