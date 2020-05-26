## 需求地址

[蓝湖地址] (https://lanhuapp.com/web/#/item/project/board?pid=a8655215-e6fd-489d-9ee7-d5812911a50d)

## 组件需求 

### 瀑布流组件 waterfall

需求输入和使用 参考 examples/routers/waterfall.vue

### 分类组件  navcate

需求输入和使用 参考 examples/routers/navcate.vue

当数据只有 1 级的时候 显示 1 级的数据

```javascript
//  暴露事件方法, 点击 1 级 显示 2 级的数据对应的界面, 有 23 级别显示 23 级的界面
selectNode(node) {
  console.log(node)
}
```

### 地区组件 area

需求输入和使用 参考 examples/routers/area.vue

问题: 
1. [缺]输入地区的下拉框没有画, 展开需要使用动画 
2. [读]初始化的时候, 传入选中的数据 默认选中
3. [错误]selectNode暴露三个参数, country, province, city, 业务逻辑内置在组件内
4. [样式] 滚动条样式需要调一下, 没有按照设计稿来.


### 分类组件 navcate

1. 给默认值, 默认值的时候, 要选中 1 2 3
2. 选中的时候 暴露 1 2 3
3. 字体整体粗细, 三级和 2 级字体间距不太对