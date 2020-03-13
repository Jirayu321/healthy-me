# Generated by Django 2.2.4 on 2020-03-13 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_userprofile_tel'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='address',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='age',
            field=models.CharField(blank=True, max_length=3),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='height',
            field=models.CharField(blank=True, max_length=3),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='sex',
            field=models.TextField(blank=True, choices=[('male', 'male'), ('female', 'female')], null=True),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='weight',
            field=models.CharField(blank=True, max_length=3),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='tel',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
