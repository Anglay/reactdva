# reactdva
基于dva-cli构建的react项目，包括react+react-router（4.2.0）+react-redux+less+ant
文件.roadhogrc 说明
``` javascript 
{
  "entry": "src/index.js",//入口文件
  "publicPath":"https://anglay.github.io/reactdva/dist/",//发布时静态资源的路径
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime"
      ]
    }
  },
  "less":"true",//less预编译添加
  "disableCSSModules":"true"//解决编译时样式问题
}
```
具体参考 [.roadhogrc](https://github.com/sorrycc/roadhog)文档，熟悉.roadhogrc文件配置是关键
