from django.urls import path
from user import views

urlpatterns=[#小写！！！
    path("reg",views.reg_view,name="reg"),#用户注册
    path("login",views.login_view,name="login"),
    path("logout",views.logout_view,name="logout"),
]