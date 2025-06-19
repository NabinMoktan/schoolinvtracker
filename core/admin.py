from django.contrib import admin

from .models import School,Infrastructure,Submission

@admin.register(School)
class SChoolAdmin(admin.ModelAdmin):
    list_display = ('name','address','ward', 'latitude','longitude')

@admin.register(Infrastructure)
class InfrastructureAdmin(admin.ModelAdmin):
    list_display = ('school','internet','computers','projector','smart_board')


@admin.register(Submission)
class SubmissionAdmin(admin.ModelAdmin):
    list_display =('school','submitted_by','date','timestamp')







# Register your models here.
