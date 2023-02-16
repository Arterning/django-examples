# python 版本查看

python -V
使用的是 python3

# 安装依赖

pip install

# 安装 Django

```python
python -m pip install Django

若要验证 Django 是否能被 Python 识别，可以在 shell 中输入 python。 然后在 Python 提示符下，尝试导入 Django：

>>> import django
>>> print(django.get_version())
4.1

django-admin startproject mysite
```

# 数据库初始化

```python
python manage.py makemigrations note #note是模块名
python manage.py migrate
```

# 运行项目

pyhton manage.py runserver
