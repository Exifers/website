# Generated by Django 2.1.5 on 2019-06-25 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leaderboard', '0006_auto_20190515_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gameresult',
            name='visible',
            field=models.BooleanField(default=False),
        ),
    ]