# Generated by Django 4.0.2 on 2022-03-02 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_rename_day_conference_year_alter_users_contactno'),
    ]

    operations = [
        migrations.AddField(
            model_name='conference',
            name='info',
            field=models.TextField(null=True),
        ),
    ]
