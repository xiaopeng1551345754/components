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