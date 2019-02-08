from django.db import models


class ProductBuild(models.Model):
    PLATFORM_CHOICES = (
        ('LINUX', 'Linux'),
        ('WINDOWS', 'Windows'),
        ('MAC', 'Mac')
    )

    file = models.FileField(upload_to='product_builds/', blank=False, null=False)
    platform = models.CharField(choices=PLATFORM_CHOICES, max_length=50, blank=False, null=False)

    def __str__(self):
        return self.platform + ' <' + str(self.file) + '>'
