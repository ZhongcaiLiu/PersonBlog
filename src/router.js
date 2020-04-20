import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//引入页面
import ShowBlog from './views/ShowBlog.vue'
import WriteBlog from './views/WriteBlog.vue'

export default new Router({
    mode:'history',
    routes: [
        {path:'/',component:ShowBlog},
        {path:'/add',component:WriteBlog},
    ]
})
