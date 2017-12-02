import Vue from 'vue';
//引入mint-ui
import MintUi from 'mint-ui';
//引入其css
import 'mint-ui/lib/style.css';
//安装插件
//1:注册所有的全局组件、挂载一些属性
Vue.use(MintUi);

import App from './App.vue'



new Vue({
    el:'#app',
    render:c=>c(App)
})