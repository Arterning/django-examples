from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from user.models import User
import hashlib
'''
█格式规范文档
◉知识点
#{
    命令行输出
#}
'''
# Create your views here.
def reg_view(request):
    #◉返回页面的另一种方法
    if request.method=="GET":
        uploadContext={"info":""}
        return(render(request,"user/register.html",context=uploadContext))
    elif request.method=="POST":
        #用户注册
        #POST 处理提交数据
        #1两次密码一致
        #2用户名是否已经存在
        username=request.POST["username"]
        password_1=request.POST["password_1"]
        password_2=request.POST["password_2"]

        #两次密码一致
        if password_1!=password_2:
            uploadContext={"info":"两次密码不一致"}
            return(render(request,"user/register.html",context=uploadContext))

        #◉哈希算法对密码加密-明文→定长密文【此过程不可逆】
        #◉特点:1.定长输出【不管明文多长,Hash值定长：MD5-32位十六进制】
        #◉特点:2.不可逆
        #◉特点:3.雪崩效应,输入改变输出必变,而且变化非常大
        #◉场景:1.密码处理
        #◉场景:2.文件完整性校验【提供下载资源的网站提供Hash值防止篡改】
        #◉应用:hashlib【自带】

        #hash加密
        m=hashlib.md5()
        m.update(password_1.encode())
        password_m=m.hexdigest()

        #用户名是否已经存在
        old_users=User.objects.filter(username=username)
        if old_users:
            uploadContext={"info":"该用户名(%s)已存在"%(username)}
            return(render(request,"user/register.html",context=uploadContext))

        #◉用户名是不可重复的,在用户量大时可能产生错误【多进程,分布式部署】

        #插入数据
        try:
            new_user=User.objects.create(username=username,password=password_m)
            #{
            print("--create user:username=%s;userpassword=%s"%(username,password_1))
            #}
        except Exception as e:
            #{
            print("--create user error %s"%(e))
            #}
            uploadContext={"info":"该用户名已存在"}
            return(render(request,"user/register.html",context=uploadContext))

        #实现注册后免登录【默认14天】
        request.session["username"]=username
        request.session["userid"]=new_user.id

        return(HttpResponseRedirect("/index"))

def login_view(request):
    if request.method=="GET":
        #检查登录状态,如果已登录,显示一已登陆
        #检查session
        if request.session.get("username") and request.session.get("userid"):
            return(HttpResponse("已登录(%s)"%(request.session.get("username"))))
        #检查cookie
        c_username=request.COOKIES.get("username")
        c_userid=request.COOKIES.get("userid")
        if c_username and c_userid:
            #写入session
            request.session["username"]=c_username
            request.session["userid"]=c_userid
            return(HttpResponse("已登录(%s)"%(c_username)))

        #没登录
        return(render(request,"user/login.html"))
    elif request.method=="POST":
        username=request.POST["username"]
        password=request.POST["password"]

        #先遍历数据库查找有没有这个用户
        try:
            user=User.objects.get(username=username)
        except Exception as e:
            #{
            print("--login user error %s"%(e))
            #}
            uploadContext={"info":"用户名或密码错误"}
            return(render(request,"user/login.html",context=uploadContext))

        #找到用户,比对密码
        m=hashlib.md5()
        m.update(password.encode())
        if m.hexdigest()!=user.password:
            uploadContext={"info":"用户名或密码错误"}
            return(render(request,"user/login.html",context=uploadContext))

        #用户名密码都对
        request.session["username"]=username
        request.session["userid"]=user.id

        resp=HttpResponseRedirect("/index")

        #判断是否点了记住登录
        #◉remember:on
        if "remember" in request.POST:
            resp.set_cookie("username",username,3600*24*30)
            resp.set_cookie("userid",user.id)

        return(resp)

def logout_view(request):
    #删除session
    if "username" in request.session:
        del request.session["username"]
    if "userid" in request.session:
        del request.session["userid"]
    #删cookie
    resp=HttpResponseRedirect("/index")
    if "username" in request.COOKIES:
        resp.delete_cookie("username")
    if "userid" in request.COOKIES:
        resp.delete_cookie("userid")

    return resp