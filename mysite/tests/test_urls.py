from django.contrib.auth.models import User
from django.test import TestCase


class UrlsTests(TestCase):

    def test_login_fail(self):
        response = self.client.post('/rest-auth/login/', {
            'username': 'John',
            'password': '1234'
        })
        self.assertEqual(response.status_code, 400)

    def test_login_success(self):
        User.objects.create_user(username='John', password='1234')
        response = self.client.post('/rest-auth/login/', {
            'username': 'John',
            'password': '1234'
        })
        self.assertEqual(response.status_code, 200)

    def test_logout(self):
        response = self.client.post('/rest-auth/logout/')
        self.assertEqual(response.status_code, 200)

    def test_password_change_not_logged_in(self):
        response = self.client.post('/rest-auth/password/change/', {
            'new_password1': '1234',
            'new_password2': '1234',
            'old_password': '1234'
        })
        self.assertEqual(response.status_code, 403)

    def test_password_change_logged_in(self):
        User.objects.create_user(username='John', password='password')
        self.client.post('/rest-auth/login/', {
            'username': 'John',
            'password': 'password'
        })
        response = self.client.get('/rest-auth/password_change/')
        self.assertEqual(response.status_code, 200)

    def test_password_change_done(self):
        response = self.client.get('/rest-auth/password_change/done/')
        self.assertEqual(response.status_code, 200)

    def test_password_reset_post(self):
        response = self.client.post('/rest-auth/password/reset/', {
            'email': 'john.doe@gmail.com'
        })
        self.assertEqual(response.status_code, 200)

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
