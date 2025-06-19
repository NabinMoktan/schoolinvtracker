from django.db import models

# Create your models here.

class School(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField()
    ward = models.CharField(max_length=200)
    latitude = models.FloatField()
    longitude = models.FloatField()
    def __str__(self):
        return self.name


class Infrastructure (models.Model):

    school = models.OneToOneField('School' ,on_delete= models.CASCADE, related_name='infrastructure')
    internet = models.BooleanField(default=False)
    computers = models.BooleanField(default=0)
    projector = models.BooleanField(default=0)
    smart_board = models.BooleanField(default=False)
    def __str__(self):
        return f"Infrastructure for {self.school.name}"


class Submission(models.Model):
    school = models.ForeignKey(School,on_delete=models.CASCADE)
    submitted_by = models.CharField(max_length= 100)
    date = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Submission for {self.school.name}"