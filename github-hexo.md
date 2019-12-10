---
title: github-hexo
date: 2019-12-07 16:39:10
tags:
---

## hexo 搭建静态博客

### 基本步骤

+ ```npm install hexo-cli -g //安装 hexo```
+ ```hexo init blogName // 初始化一个博客```
+ ```cd blogName // 进入到该博客路径下```
+ ```npm install // 安装依赖项```
+ ```hexo server //启动本地服务 127.0.0.1：4000```

### 将blog 部署到github

+ 在github 创建一个仓库： UserName.github.io
+ 通过命令 **git deploy** 将 hexo 部署到 github 上
  + ```npm install hexo-deployer-git --save```
  + 修改本地配置文件 _config.yml deploy项
    + type: git
    + repo: 远程仓库
  + ```hexo deploy```
+ 通过命令使github 上的内容推送更及时
  + ```hexo generate --deploy```
  + ```hexo deploy --generate```

### 说明

+ ```bash
  将 hexo 部署到 github 反应会比较慢，需要等待一小段时间 ，github.io才会更新
  ```