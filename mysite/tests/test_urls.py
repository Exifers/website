from django.contrib.auth.models import User
from django.test import TestCase


class UrlsTests(TestCase):

    def test_login_get(self):
        response = self.client.get('/rest-auth/login/')
        self.assertEqual(response.status_code, 200)

    def test_login_post(self):
        response = self.client.post('/rest-auth/login/', {
            'username': 'John',
            'password': 'password'
        })
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        response = self.client.get('/rest-auth/logout/')
        self.assertEqual(response.status_code, 200)

    def test_password_change_not_logged_in(self):
        response = self.client.get('/rest-auth/password_change/')
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.get('location'), '/rest-auth/login/?next=/rest-auth/password_change/')

    def test_password_change_logged_in(self):
        User.objects.create_user(username='John', password='password')
        self.client.post('/rest-auth/login/', {
            'username': 'John',
            'password': 'password'
        })
        response = self.client.get('/rest-auth/password_change/')
        self.assertEqual(response.status_code, 200)

    def test_password_change_done_not_logged_in(self):
        response = self.client.get('/rest-auth/password_change/done/')
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.get('location'), '/rest-auth/login/?next=/rest-auth/password_change/done/')

    def test_password_change_done_logged_in(self):
        User.objects.create_user(username='John', password='password')
        self.client.post('/rest-auth/login/', {
            'username': 'John',
            'password': 'password'
        })
        response = self.client.get('/rest-auth/password_change/done/')
        self.assertEqual(response.status_code, 200)

    def test_password_reset_get(self):
        response = self.client.get('/rest-auth/password_reset/')
        self.assertEqual(response.status_code, 200)

    def test_password_reset_post(self):
        response = self.client.post('/rest-auth/password_reset/', {
            'email': 'john.doe@gmail.com'
        })
        self.assertEqual(response.get('location'), '/rest-auth/password_reset/done/')

    def test_password_reset_done(self):
        response = self.client.get('/rest-auth/password_reset_done/')
        self.assertEqual(response.status_code, 200)

    def test_password_reset_confirm(self):
        response = self.client.get('/rest-auth/password_reset/12/a1a1a1-a1a1a1')
        self.assertEqual(response.status_code, 200)

    def test_reset_done(self):
        response = self.client.get('/rest-auth/password_reset/done')
        self.assertEqual(response.status_code, 200)

    def test_register(self):
        response = self.client.get('/rest-auth/register/')
        self.assertEqual(response.status_code, 200)
