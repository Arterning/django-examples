# 安装 virtualenv

```
pip install virtualenv
```

# 使用 virtualenv 新建虚拟环境

使用 python3 环境创建名字为 py3 的虚拟环境

```
virtualenv -p python3 py3
```

# 进入虚拟环境

进入虚拟环境目录，创建虚拟环境实际上就是在你的当前目录下创建了一个 py3 的目录而已
pip install 命令下载的依赖都会存在这个目录下

激活虚拟环境：在终端中运行 source venv/bin/activate 命令来激活虚拟环境。激活后，您会发现命令提示符的开头会显示当前虚拟环境的名称。

```
source py3/bin/activate
```

# 在虚拟环境中安装 Python 包

在虚拟环境中安装 Python 包：在虚拟环境中运行 pip install package-name 命令来安装您需要的 Python 包。

退出虚拟环境：在终端中运行 deactivate 命令来退出当前虚拟环境。

# 为什么 python 有虚拟环境这个概念

其他编程语言也有类似的虚拟环境概念，例如 Node.js 有 nvm 和 npm，Ruby 有 RVM 和 Bundler 等。Python 之所以引入虚拟环境的概念，是因为 Python 的第三方库和包管理机制十分丰富，而且不同的项目可能会依赖不同版本的包，这容易导致包的冲突和版本不兼容问题。使用虚拟环境可以避免这些问题，每个虚拟环境可以独立安装不同版本的 Python 和第三方包，从而使不同的项目之间的依赖关系互相独立，这对于 Python 开发者来说非常有用。虚拟环境的引入使得 Python 开发变得更加灵活和便捷，也更好地保护了计算机安全。
