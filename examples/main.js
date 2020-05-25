/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './app.vue';
import stage from '../src/index';

Vue.use(VueRouter);
Vue.use(stage);
// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter();

router.map({
  '/waterfall': {
    component: function(resolve) {
      require(['./routers/waterfall.vue'], resolve);
    }
  },
  '/navcate': {
    component: function(resolve) {
      require(['./routers/navcate.vue'], resolve);
    }
  },
  '/area': {
    component: function(resolve) {
      require(['./routers/area.vue'], resolve);
    }
  },
  '/timeline': {
    component: function(resolve) {
      require(['./routers/timeline.vue'], resolve);
    }
  }
});

router.beforeEach(function() {
  window.scrollTo(0, 0);
});

router.afterEach(function(transition) {

});

router.redirect({
  '*': "/timeline"
});
router.start(App, '#app');
