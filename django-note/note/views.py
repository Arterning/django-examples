from django.shortcuts import render
from django.http.response import HttpResponse, HttpResponseRedirect

# Create your views here.

from note.models import Note

#用装饰器实现自动判断是否已经登录

#◉在函数被执行前会先执行装饰器
def check_login(fn):
    def warp(request,*args,**kwargs):
        #这里写判断
        if "username" not in request.session or "userid" not in request.session:
            c_username=request.COOKIES.get("username")
            c_userid=request.COOKIES.get("userid")
            if not c_username or not c_userid:
                return(HttpResponseRedirect("/user/login"))
            else:
                request.session["username"]=c_username
                request.session["userid"]=c_userid
        return fn(request,*args,**kwargs)
    return warp

#◉在函数被执行前会先执行装饰器

@check_login
def add_note(request):
    if request.method=="GET":
        return(render(request,"note/add_note.html"))
    elif request.method=="POST":
        userid=request.session["userid"]
        title=request.POST["title"]
        content=request.POST["content"]
        Note.objects.create(title=title,content=content,user_id=userid)
        return(HttpResponse("添加cg"))