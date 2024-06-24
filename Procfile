#web: npm run serve
web: gunicorn myproject.wsgi --log-file -
release: python manage.py migrate --no-input