# 学习笔记  

## 版本控制  

### svn  

### Git  

- Git 分布式，两部分，远程仓库，本地仓库
- 本地仓库分为三部分： 工作区、缓存区、本地仓库
- 工作区 --> 缓存区 ： ```git add . ; git add fileName ; git add -A  ```
- 缓存区 --> 本地仓库 ： ``` git commit . ; git commit fileName ; git commit -A```

### Git 常用命令

+ ~~~bash
  git clone url // 从远程仓库克隆仓库到本地
  ~~~

+ ~~~bash
  git add <par> // 将文件从工作区加入到缓存区
  ~~~

+ ~~~bash
  git commit <par> // 将文件从缓存区加入到 本地仓库
  ~~~

+ ~~~bash
  git push [par] // 将本地仓库中push 到远程仓库
  ~~~

+ ~~~bash
  git config [--global] user.name=""
  git confit [--global] user.email="" // 配置push 用户信息
  ~~~

+ ~~~bash
  git checkout <par> // 用于缓存区与工作区文件的回滚操作
  ~~~

+ 