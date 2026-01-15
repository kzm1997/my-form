import Vue from 'vue'
import App from './App.vue'
import components from '@/element/view'
Vue.config.productionTip = false

import ElementUI from  'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './style/index.scss'


console.log( components);
components.forEach(item =>{
  console.log(item);
  // Vue.component(item.name, item)
})


new Vue({
  render: h => h(App),
}).$mount('#app')
