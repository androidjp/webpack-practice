# 解释
尝试接入css-loader
* 发现，要让css生效，还需要配合style-loader


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
```