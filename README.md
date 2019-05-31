# 解释
webpack 解释打包 TypeScript

尝试在 js目录下，增加一个ts 文件，并使用webpack来兼容它。

需要引入两个开发库，并且，新增 `tsconfig.json` 默认 typeScript 解释器 找的配置文件，并加以配置。

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
typescript           // typescript解释环境
ts-loader            // webpack 读懂 typescript
```