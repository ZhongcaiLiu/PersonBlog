# Vue入门练手demo（个人博客）

## 用到了 ***Vuex Vue-router*** *localStorage 自定义指令*

### _彩虹色_

## Vue实例

```
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
//自定义指令 （彩虹色）
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color='#'+Math.random().toString(16).slice(2,8)
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

```
## Vuex

```
import Vue from 'vue'
import Vuex from 'vuex'
import localStorage from '@/utils/localStorage'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogs: localStorage.read(),
    },
    mutations: {
        addBlogs(state, blog) {
            state.blogs.unshift(blog)
        },
        delBlogs(state, index) {
            state.blogs.splice(index, 1);
        }
    },
})
```
## Vue-router

```
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
```
### router-link传参

```
<div class="blog" v-for="(blog, index) in Showblogs" :key="index">
      <router-link :to="'/blog/'+blog.title+'/'+blog.content+'/'+blog.author">
        <h2 v-rainbow>{{blog.title}}</h2>
      </router-link>
```
