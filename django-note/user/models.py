from django.db import models

# Create your models here.

#用户表
class User(models.Model):
    username=models.CharField("用户名",max_length=30,unique=True)#不能重复
    password=models.CharField("密码",max_length=32)
    created_time=models.DateTimeField("创建时间",auto_now_add=True)
    update_time=models.DateTimeField("更新时间",auto_now=True)

    def __str__(self):
        return("用户"+self.username)