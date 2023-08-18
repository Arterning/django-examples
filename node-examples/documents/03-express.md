## nodemon 加速开发
Nodemon 是一款颇受欢迎的开发服务器，能够检测工作区代码的变化，并自动重启。通过以下命令安装 nodemon：

`npm install nodemon --save-dev`

这里我们将 nodemon 安装为开发依赖 devDependencies，因为仅仅只有在开发时才需要用到。同时我们在 package.json 中加入 start 命令，代码如下：

## log
在中间件中写 console.log 语句是比较糟糕的做法，因为 console.log（包括其他同步的代码）都会阻塞 Node.js 的异步事件循环，降低服务器的吞吐率。在实际生产中，推荐使用第三方优秀的日志中间件，例如 morgan、winston 等等。

## error
处理 404 和服务器错误
人有悲欢离合，月有阴晴圆缺，服务器也有出错的时候。HTTP 错误一般分为两大类：

客户端方面的错误（状态码 4xx），例如访问了不存在的页面（404）、权限不够（403）等等
服务器方面的错误（状态码 5xx），例如服务器内部出现错误（500）或网关错误（503）等等

