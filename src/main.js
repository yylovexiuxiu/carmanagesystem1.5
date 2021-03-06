import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import BaiduMap from 'vue-baidu-map'
import {BmlLushu} from 'vue-baidu-map'
//import './assets/css/weui.min.css'
import './assets/css/app.css'
import './assets/css/weui.css'
import './assets/css/weuix.css'
//倒入router.js模块
import router from './router.js'
// //导入weui.js中的文件
//import weuijs '../assets/js/zepto.min.js'
import weui from 'weui.js'
//import 'weui'
Vue.prototype.$weui = weui
//使用百度地图
Vue.use(BaiduMap, {
    ak: 's7mAXGzAueWSfZdOoq2ToIg1HMTNjD6G'
})
//注册路书组件
Vue.component('bml-lushu', BmlLushu)
//使用Http库
Vue.use(VueResource)
//安装路由
Vue.use(VueRouter)
//默认为true，生产时候产生提示信息
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //挂载router对象到vue实例上
    router
}).$mount('#app')
