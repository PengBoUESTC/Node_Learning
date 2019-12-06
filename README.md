# 学习笔记  

## 版本控制  

### svn  

+ 需要服务器作为仓库， 在该服务器上进行代码的增删改

+ 常用命令  commit checkout update

+ 1:通过 visualSVN搭建服务器

+ 2：设置用户以及用户权限

+ 3：创建新的仓库     

+ 4：获得该仓库的http 连接

  

+ 5：通过 tortoiseSVN 安装客户端

+ 6：通过在指定目录下 checkout文件获取仓库

  

+ 7：commit 之前最好先 update 防止代码过期

+ 8：不要频繁提交代码，若想保存代码可以将未完成的部分代码 注释后 提交

### Git  

- Git 分布式，两部分，远程仓库，本地仓库
- 本地仓库分为三部分： 工作区、缓存区、本地仓库
- 工作区 --> 缓存区 ： ```git add . ; git add fileName ; git add -A  ```
- 缓存区 --> 本地仓库 ： ``` git commit . ; git commit fileName ; git commit -A```

### Git 常用命令

+ ~~~bash
  git status // 用于查看 当前文件状态
  ~~~

+ ~~~bash
  git log  [par] // 用于查看提交记录
  ~~~

+ 

+ ~~~bash
  gitk // 打开图形界面 查看详细的文件信息
  ~~~

+ ~~~bash
  git clone url // 从远程仓库克隆仓库到本地
  ~~~

+ ~~~bash
  git add <par> // 将文件从工作区加入到缓存区
  ~~~

+ ~~~bash
  git commit -m "message" // 将文件从缓存区加入到 本地仓库
  ~~~

+ ~~~bash
  git push [par] // 将本地仓库中push 到远程仓库
  ~~~

  - ~~~bash
    git remote add <name> <eamil> // 当仓库是本地创建时，在push 之前需要设置 remote 仓库
    ~~~
  
  - ~~~bash
    git remote [show Name] // 查看 所有（指定）的远程仓库信息
    ~~~
  
+ ~~~bash
  git config [--global] user.name=""
  git config [--global] user.email="" // 配置push 用户信息
  git config --local -l // 查看仓库配置信息
~~~
  
+ ~~~bash
  git rm <fileName> // 删除文件 并将此次操作加入缓存区
  git rm --cached <filename> // 将文件从缓存区移除

  git mv oldname new name // 将文件重命名并将该操作加入缓存区
  ~~~
  
+ 