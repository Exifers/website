from django.test import TestCase


class UrlsTest(TestCase):
    def test_register(self):
        response = self.client.get('/register/register/')
        self.assertEqual(response.status_code, 200)
