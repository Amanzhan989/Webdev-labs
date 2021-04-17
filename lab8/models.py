from django.db import models

# Create your models here.
class Product(models.Model):
    name= models.CharField(max_length=100)
    price=models.FloatField(default=0)
    description=models.TextField(default='')
    count=models.FloatField(default=0)
    isActive=models.BooleanField(default=False)
    def to_json(self):
        return {
            'name':self.name,
            'price':self.price,
            'description':self.description,
            'count':self.count,
            'isActive':self.isActive
        }
class Category(models.Model):
    name= models.CharField(max_length=100)
    def to_json(self):
        return {
            'name':self.name,
        }
