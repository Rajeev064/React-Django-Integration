# Generated by Django 4.0.2 on 2022-03-01 07:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_conference_saves'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResearchPapers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('abstract', models.TextField()),
                ('collab_ids', models.CharField(max_length=500)),
                ('conference_name', models.CharField(max_length=200, null=True)),
                ('journal_name', models.CharField(max_length=200, null=True)),
                ('domain', models.CharField(max_length=200)),
                ('keywords', models.TextField()),
                ('doi', models.CharField(max_length=300, null=True)),
                ('media', models.CharField(max_length=100, null=True)),
                ('published_date', models.DateTimeField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('username', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50)),
                ('contactno', models.IntegerField(max_length=20, null=True)),
                ('user_type', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=100)),
                ('organization_name', models.CharField(max_length=100)),
                ('profession', models.CharField(max_length=100, null=True)),
                ('city', models.CharField(max_length=50, null=True)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('skills', models.CharField(max_length=500, null=True)),
                ('description', models.CharField(max_length=200)),
                ('languages', models.CharField(max_length=200, null=True)),
                ('profile_pic', models.CharField(max_length=200, null=True)),
                ('scholar', models.CharField(max_length=500, null=True)),
                ('orchid', models.CharField(max_length=200, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField()),
            ],
        ),
        migrations.AlterField(
            model_name='conference',
            name='image',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.CreateModel(
            name='WorkExp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('organization', models.CharField(max_length=200)),
                ('position', models.CharField(max_length=200)),
                ('employment_type', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
                ('media', models.CharField(max_length=200, null=True)),
                ('description', models.TextField(null=True)),
                ('ongoing', models.BinaryField()),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField(null=True)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.users')),
            ],
        ),
        migrations.CreateModel(
            name='UserResearch',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('research_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.researchpapers')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.users')),
            ],
        ),
        migrations.CreateModel(
            name='Threads',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reply_id', models.IntegerField()),
                ('content', models.TextField()),
                ('upvotes', models.IntegerField()),
                ('media', models.CharField(max_length=200, null=True)),
                ('is_viewed', models.BinaryField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('research_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.researchpapers')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.users')),
            ],
        ),
        migrations.CreateModel(
            name='Saved',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conference_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.conference')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.users')),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('institution', models.CharField(max_length=200)),
                ('degree', models.CharField(max_length=200)),
                ('grade', models.CharField(max_length=200, null=True)),
                ('description', models.TextField(null=True)),
                ('media', models.CharField(max_length=200, null=True)),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.users')),
            ],
        ),
        migrations.CreateModel(
            name='Certification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_name', models.CharField(max_length=200)),
                ('organization', models.CharField(max_length=200)),
                ('link', models.TextField(null=True)),
                ('credential_id', models.CharField(max_length=200, null=True)),
                ('completition_date', models.DateTimeField()),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.users')),
            ],
        ),
    ]
