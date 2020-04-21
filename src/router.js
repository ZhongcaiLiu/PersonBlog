import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//引入页面 (常规)
// import ShowBlog from './views/ShowBlog.vue'
// import WriteBlog from './views/WriteBlog.vue'
// import SingleBlog from './views/SingleBlog.vue'

// 引入页面 (路由懒加载)
const ShowBlog = () => import('./views/ShowBlog.vue')
const WriteBlog = () => import('./views/WriteBlog.vue')
const SingleBlog = () => import('./views/SingleBlog.vue')

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: ShowBlog
        },
        {
            path: '/add',
            component: WriteBlog
        },
        {
            path: '/blog/:title/:content/:author',
            component: SingleBlog,
            props: true
        }
    ]
})