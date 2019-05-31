# 解释
热替换模块的使用。

注意：
* 不要在生产环境（production）下启用 HMR。

三种方式适用于开发环境下的热替换：
1. `webpack --watch` 启动订阅模式
2. `webpack-dev-server` 自带的 `hot`模式
3. `webpack-dev-middleware` 配合 express


# 命令
```
npm i
npm run webpack
```

# 相关库
```
clean-webpack-plugin // 自动清理dist目录
html-webpack-plugin  // 自动注入js等到模板html
css-loader           // 让webpack能够识别css
style-loader         // 将经过css-loader处理后的样式被识别和解释
webpack-dev-server     // 依赖middleware 的 server
webpack-dev-middleware // 模块热替换插件
```