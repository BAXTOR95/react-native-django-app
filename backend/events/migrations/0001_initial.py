# Generated by Django 4.2.6 on 2023-10-10 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TimeField()),
                ('qr_code', models.ImageField(blank=True, upload_to='qrcodes/')),
                ('date', models.DateField()),
            ],
        ),
    ]
