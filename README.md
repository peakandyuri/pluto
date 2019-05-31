# pluto
像冥王星渺小的一个项目，虽然小，但是希望它五脏俱全

一个React示例项目，采用了Typescript作为开发语言，没有使用脚手架去创建项目，主要是想了解一下webpack打包及使用babel编译这一块。

## 安装
```bash
yarn install
#or
npm install
```

## 运行
```bash
yarn start
#or
npm start
```
优秀的脚手架帮助你实现的功能太多，但是它们都是做了太多封装，导致你对底层的东西了解不多。但是Webpack4现在已经做了很多东西了，有些功能加一个配置就完成了。

已经解决的问题
<ol>
    <li>typescript的编译</li>
    <li>开发环境热加载</li>
    <li>antd引入，并依靠它的插件实现分组件引入</li>
    <li>css和less的编译与引入</li>
    <li>对js的拆分、css拆分，公共组件vendor生成</li>
    <li>html的生成及使用</li>
    <li>图片文件的处理，并生成资源目录</li>
    <li>打包时先清理之前的打包文件</li>
    <li>路由的引入</li>
</ol>
目前想到一些问题
<ul>
    <li>想实现动态路由，不需要配置路由</li>
    <li>redux及其中间件,封装saga和elm等</li>   
    <li>webpack输出内容优化</li>
    <li>考虑是否要使用css modules</li>
</ul>
