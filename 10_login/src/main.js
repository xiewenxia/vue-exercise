import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';

// 引入组件
import App from './components/App.vue';
import Home from './components/Home.vue';
import List from './components/List.vue';
import Login from './components/Login.vue';
import Music from './components/Music.vue';


// 安装插件
Vue.use(VueRouter);
Vue.use(MintUi);
// 利用其原型属性挂载axios
Vue.prototype.$axios = Axios;

// 使用拦截器实现加载的功能
Axios.interceptors.request.use(function (config) {
    MintUi.Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
    });
    return config;
})
Axios.interceptors.response.use(function (config) {
    MintUi.Indicator.close();
    return config;
})

// 设置基础的URL
Axios.defaults.baseURL = 'http://localhost:3000/';

// 配置路由对象
let router = new VueRouter();

// 配置路由规则
router.addRoutes([
    {
        name: 'home', path: '/home', component: Home,
        children: [
            {
                name: 'login', path: '/login', component: Login
            },
            {
                name: 'music', path: '/music', component: Music, meta: { check: true },
                children: [{
                    name: 'music.list', path: '/list', component: List
                }]
            }
        ]
    }
])

// 全局守卫
router.beforeEach((to, from, next) => {
    console.log(to)
    next();

    let checkLogin = false;
    to.matched.forEach( ele => {
        if(ele.meta.check) {
            checkLogin = true;
        }
    });
    // 如果存在meta.check,发送请求
    if(checkLogin) {
        var username = window.localStorage.getItem('username');
        Axios.get('users/' + username).then(res => {
            // console.log(res);
            if(res.data.isLogin){
                return next();
            }
            //没有登录
            MintUi.Toast({
                message: '请登录',
                position: 'middle',
                duration: 5000
              });

              next({
                  name:'login'
              })
        })
        .catch(err=>{
            console.log(err);
        })
    }else{
        next();
    }
})
// 启动vue
new Vue({
    el: '#app',
    render: c => c(App),
    router
})