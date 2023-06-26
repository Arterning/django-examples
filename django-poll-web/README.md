# Description

根据 Django 官方的教程写的投票系统

### 运行投票系统

1.安装 python，MySQL-python, gunicorn(可选)  
2.clone 项目

```
 $ cd worksapce
 $ git clone git@github.com:giraffe0813/PollSystemDemo.git
```

3.修改 setting.py 文件中的数据库配置

```
 $ cd PollSystemDemo/mysite
 $ vi setting.py
```

依据实际使用的数据库地址，用户，密码

4.建表

执行下面的命令会在上面配置的数据库中新建多张表

```
 $ cd PollSystemDemo
 $ python manage.py migrate
```

5.运行
两种方法

- 最简单的方法

```
 $ pyhton manage.py runserver
```

- 第二种方法 需要安装 gunicorn

```
 $ gunicorn mysite.wsgi:application -b 127.0.0.1:8000 --reload
```

6 访问  
浏览器中访问 localhost:8000 即可

### 使用投票系统管理后台

1 创建管理员账号

```
  $ cd PollSystemDemo
  $ python manage.py createsuperuser
```

按照提示设置用户名，邮箱和密码

2 运行项目

- 最简单的方法

```
 $ pyhton manage.py runserver
```

- 第二种方法 需要安装 gunicorn

```
 $ gunicorn mysite.wsgi:application -b 127.0.0.1:8000 --relo
```

3 访问管理后台

浏览器访问 localhost:8000/admin
按照第一步设置的用户名和密码登陆就可以使用管理系统了
