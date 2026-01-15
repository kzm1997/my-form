import Vue from 'vue'
import App from './App.vue'
import components from '@/element/view'
Vue.config.productionTip = false

import ElementUI from  'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './style/index.scss'


// 全局注册所有从 view.js 导入的组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
})


new Vue({
  render: h => h(App),
}).$mount('#app')
