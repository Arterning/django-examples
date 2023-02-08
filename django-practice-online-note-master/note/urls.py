from django.urls import path
from note import views

urlpatterns=[#小写！！！
    path("add",views.add_note,name="add"),
]