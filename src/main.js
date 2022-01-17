import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import Vuex from 'vuex'
import store from  './store';
Vue.use(Antd);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(axios);
Vue.use(VueRouter);
Vue.config.productionTip = false
router.beforeEach((to,from,next) =>      {

 let isLogin = sessionStorage.getItem('isLogin');
  if(to.path==='/Logout')
  {
    sessionStorage.clear();
    next({path:'/Login'});
  }
 else if(to.path==='/Login')
  {
      console.log(isLogin);
    if(isLogin!=null)
    {
      next({path:'/Main'});
    }

    next();
    }
  next();
})

new Vue({
  router,
store,
    axios,
  render: h => h(App),
}).$mount('#app')
