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
- 

### Git 常用命令

#### 初始化git仓库方式

+ ~~~bash
  git init // 将当前目录初始化为 git仓库
  git init [filename] // 创建文件夹， 并初始化为仓库
  git clone <url> // 从远程仓库克隆一个仓库当本地 
  ~~~

#### 配置

+ ~~~bash
  git config --list // 查看 当前 git 配置
  git config [--global] user.name=""
  git config [--global] user.email="" // 配置push 用户信息
  git config --local -l // 查看仓库配置信息
  ~~~

+ 

#### 增加/删除文件

+ ~~~bash
  git add [fileName] [fileName] // 将指定文件加入到缓存区
  git add [dir] // 将指定目录添加到缓存区
  git add . // 添加当前目录所有文件到暂存区
  ~~~

+ ~~~bash
  git rm [fileName] [fileName] // 删除指定文件并将操作加入到暂存区
  git rm --cached [fileName] // 停止追踪文件（将文件从暂存区移除），但工作区不会受到影响，
  git mv oldname newname // 重命名文件，并将操作添加到暂存区
  ~~~

#### 代码提交

+ ~~~bash
  git commit -m <"message"> // 将暂存区中的文件全部提交到仓库
  git commit [filename] [filename] -m <"message"> // 将暂存区中的指定文件提交到仓库
  git commit -a // 直接将工作区中的文件提交到 仓库
  
  git commit -v // 提交时显示 diff 信息
  git commit --amend -m <"message"> // 使用一次新的提交取代上一次提交，若代码无变化则可以改写commit 提交信息
  git commit --amend [filename] [filename] // 重做上一次commit
  ~~~

+ 

#### 分支

#### 标签

#### 查看信息

+ ~~~bash
  git status // 查看有变更的文件信息
  git log // 查看提交记录
  git log --stat // 显示 commit历史 以及每次commit 发生变更的文件
  
  git diff // 显示暂存区与工作区的差异
  git diff --cached // 显示暂存区与 上一次 commit 之间的差异
  git diff HEAD // 显示工作区与最新 commit 之间的擦会议
  
  git show <commit> <filename> // 显示某次提交时 指定文件的内容
  ~~~

#### 远程同步

+ ~~~bash
  git remote -v // 显示所有的远程仓库
  git remote show <remote> // 显示指定远程仓库的详细信息
  
  git remote add <name> <url> // 添加远程仓库
  
  git pull <remote> <branch> // 取回远程仓库并与本地合并
  git push <remote> <branch> // 将本地仓库指定分支上传到远程仓库
  
  git push <remote> --all // 推送所有分支到远程仓库
  ~~~

#### 撤销

+ ~~~bash
  git checkout [filename] // 将指定文件从暂存区恢复到工作区
  git checkout . // 恢复所有暂存区中的文件到龚总区
  
  git checkout <commit> <filename> //恢复 指定 commit 指定 文件到暂存区与 工作区
  ~~~

+ ~~~bash
  git reset [filename] // 重置暂存区的指定文件，与上一次 commit 中的保持一致工作区不变
  git reset --hard // 重置暂存区 与 工作区 与上一次 commit 保持一致
  git reset <commit> // 重置当前分支的指针为 commit , 保持 暂存区与工作区不变
  git reset --hard <commit> // 将当前分支的HEAD 指向commit 同时重置缓存区与暂存区
  git resset --keep <commit> // 重置当前分支的 HEAD ，但是 工作区与缓存区不变
  ~~~

#### 其他