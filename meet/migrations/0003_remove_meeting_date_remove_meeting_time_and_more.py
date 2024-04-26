# Generated by Django 5.0.4 on 2024-04-23 11:50

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meet', '0002_remove_meeting_datetime_meeting_date_meeting_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meeting',
            name='date',
        ),
        migrations.RemoveField(
            model_name='meeting',
            name='time',
        ),
        migrations.AddField(
            model_name='meeting',
            name='datetime',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
