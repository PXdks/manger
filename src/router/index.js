import Vue from 'vue'
import axios from "axios";
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import BookList from "@/views/Book/BookList.vue";
import BookOperate from "@/views/Book/BookOperate";
import T1 from "@/views/Test/T1";
import BookTest from "@/views/Book/BookTest";
import NotFound from "@/views/NotFound";
import GetImg from "@/views/GetImg";
import Register from "@/views/Register";
import Music from "@/views/Test/Music";

Vue.use(VueRouter);
const routes = [{
    path: '/Main',
        name: 'Main',
    component: Main,
    children:[
        {
            path:'/Book/BookList',
            name:'BookList',
            component:BookList,
        },
        {
            path:'/Book/BookOperate',
            name:'BookOperate',
            component:BookOperate,
        },
        {
            path:'/Test/T1',
            name:'T1',
            component:T1,
        },
        {
            path:'/Book/BookTest',
            name:'BookTest',
            component:BookTest,
        },
        {
            path:'/GetImg',
            name: 'GetImg',
            component: GetImg
        },
        {
            path:'/Music',
            name:'Music',
            component: Music
        }


    ]
},
    {
        path: '/Login',
        name:'Login',
        component: Login,
    },
    {
        path:'/',
        name:'Login',
        component: Login,
        redirect: '/Login'
    },
    {
        path:'/goMain',
        redirect:'/Main'
    },
    {
        path: '/register',
        name:'Register',
        component: Register,
    },
    {
        path:'*',
        component: NotFound
    },

]

const router = new VueRouter({
    routes,
    axios,
})

export default router