---
title: Git基本命令
date: 2019-12-08 20:07:31
tags: Git
---

### 1. Git-Flow

### 2.初始化

+ 在本地初始化一个仓库
  ~~~bash
  git init  
  ~~~

+ 通过从远程仓库克隆
  ~~~bash
  git clone <remoteUrl>  
  gti clone --depth <depth> <remoteUrl>
  ~~~

+ 在本地创建一个文件夹fileName 并初始化为一个仓库
  ~~~bash
  git init <fileName>  
  ~~~

### 3. 配置

+ 显示左右的配置项
~~~bash
  git config --list
~~~

+ 用于添加操作的用户，github 会根据 email匹配提交用户
~~~bash
  git config --global user.name="Name"
  git config --global user.email= "email"
~~~

### 4. 提交

+  将本地文件添加到暂存区
~~~bash
  git add [file1] [fil2] ...
  ~~~

+ 将所有改变的文件添加到暂存区
~~~bash
  git add .  
  ~~~

+ 将所有发生改变的文件加入暂存区
~~~bash
  git add -A
  git add --all 
  ~~~

+ 将暂存区的文件 加入到本地仓库
~~~bash
  git commit [file1] [file2] ... 
  ~~~

+ 提交并添加说明信息
~~~bash
  git commit -m "message" 
  ~~~

+ 将所有暂存区的文件加入到本地仓库
~~~bash
  git commit .
  git commit -a
  git commit --all 
  ~~~

+ 提交时显示 diff 信息
~~~bash
  git commit -v
~~~

+ 重新提交上一次提交，若本次文件不变，则只是改变说明信息
~~~bash
  git commit amend -m "message" 
  ~~~

### 5. 状态查看

+ 打开图形界面查看 提交信息
~~~bash
  gitk 
  ~~~

+ 查看提交记录
~~~bash
  git log 
  ~~~

+ 查看当前文件状态
~~~bash
  git status 
  ~~~

+ 查看变化
~~~bash
  git diff <commit1> <commit2> // commit1 提交型对于 commit2 提交的变化
  git diff --cached <commit> // 用于比较缓存区与上一次提交之间的差异
  git diff [<commit>] // 用于比较工作区与暂存区（最近一次提交）或指定提交之间的差异
  ~~~

### 6. 分支
+ 查看分支
~~~bash
  git branch
  git branch --list
  git branch -l

  git branch -a   // 列出所有的分支包括远程分支
  git branch --all
~~~

+ 创建分支
~~~bash
  git branch <branchName>
~~~

+ 创建一个新的分支，指向指定的 commit
~~~bash
  git branch <branchName> <commit>
~~~

+ 切换分支
~~~bash
  git checkout branchName
  git checkout - // 切换到上一次操作的分支
~~~

+ 创建并切换分支
~~~bash
  git checkout -b <branchName>
~~~

+ 分支删除
~~~bash
  git branch -d <branchName>
~~~

+ 分支重命名
~~~bash
  git branch -m <branchName>
~~~

+ 分支合并(冲突的解决)
~~~bash
  git merge <branchName>
~~~

+ 合并冲突时撤销合并
~~~bash
  git merge --abort
~~~

### 7. 删除回滚

+ 将暂存区的文件恢复到工作区,更新工作区
~~~bash
  git checkout <fileName>
  git checkout .
~~~

+ 将最新一次提交恢复到工作区
~~~bash
  git checkout <commit> <fileName>
~~~

+ 将最新commit 文件恢复到暂存区，工作区保持不变
~~~bash
  git reset <fileName>
~~~

+ 重置暂存区与 工作区，与最新一次 commit 一致
~~~bash
  git reset --hard 
~~~

+ 重置当前分支 **指针**到 指定 commit, 更新暂存区， 工作区保持不变
~~~bash
  git reset <commit>
~~~

+ 重置当前分支 **指针** 到指定 commit ， 同时更新工作区与暂存区,与指定 commit 保持一致
~~~bash
  git reset --hard <commit>
~~~

### 8. 文件删除

+ 删除文件,并将此次操作记录如暂存区
~~~bash
  git rm <fileName>
~~~

+ 文件重命名，并将此次操作记录入暂存区
~~~bash
  git mv <oldName> <newName>
~~~

+ 停止追踪文件
~~~bash
  git rm --cached <fileName>
~~~


### 9. 远程操作

+ **从远程 clone 得到的仓库自动会存在一个 origin 仓库**

+ 查看远程仓库
~~~bash
  git remote -v
  git remote show <name>
~~~

+ 添加远程仓库
~~~bash
  git remote add <name> <url>
~~~

+ 删除远程仓库
~~~bash 
  git remove <name>
~~~

+ 重命名远程仓库
~~~bash
  git rename <oldName> <newName>
~~~

+ 获取远程仓库 内容 并与本地合并 (可指定远程仓库与 分支)
~~~bash
  git pull [remote] [branch]
~~~

+ 将本地 推送到远程仓库 （可指定远程仓库 与 本地分支）
~~~bash
  git push [remote] [branch]
  git push [remote] --all
~~~

+ 强行推送本地仓库当远程，忽略冲突
~~~bash
  git push [remote] --force
~~~

### 10. 标签

### 11. gitignore 文件

  + 在提交时忽略指定文件