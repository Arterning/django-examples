# windows 安装 rust

使用 windows 下的 ubuntu 虚拟系统比较方便

如果您是 Windows 的 Linux 子系统（WSL）用户，要安装 Rust，请在终端中运行以下命令，然后遵循屏幕上的指示。

`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

# 配置环境变量

所有工具都安装在 ~/.cargo/bin 目录中，您可以在这里找到包括 rustc、cargo 和 rustup 在内的 Rust 工具链。

Rust 开发者通常会将该目录加入 PATH 环境变量中。在安装过程中，rustup 会尝试配置 PATH。 由于不同平台、命令行 Shell 之间存在差异，rustup 中也可能存在 Bug，因此在终端重启或用户重新登录之前，rustup 对 PATH 的修改可能不会生效，甚至完全无效。

如果安装后在终端尝试执行 rustc --version 失败，那么，以上内容就是最可能的原因。

```bash
echo "export PATH=$PATH:~/.cargo/bin"
```

# cargo 报错 linker `cc` not found 如何解决

如果你在使用 cargo 构建 Rust 项目时遇到“linker cc not found”错误，这可能是因为系统缺少 C 语言编译器（即，gcc）。为解决此问题，请在你的系统上安装 GCC。

在 Ubuntu 系统上，您可以通过以下命令安装 GCC：

`sudo apt-get install gcc`
