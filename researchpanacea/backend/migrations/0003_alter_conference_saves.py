# Generated by Django 4.0.2 on 2022-02-19 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_delete_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conference',
            name='saves',
            field=models.IntegerField(default=0),
        ),
    ]
