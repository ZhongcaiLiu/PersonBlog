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
        }
    },
    actions: {

    },
})