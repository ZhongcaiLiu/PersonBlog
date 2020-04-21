<template>
  <div id="ShowBlog">
    <h1>博客总览</h1>
    <input type="text" placeholder="search blogs" v-model="searchname" />
    <div class="blog" v-for="(blog, index) in Showblogs" :key="index">
      <router-link :to="'/blog/'+blog.title+'/'+blog.content+'/'+blog.author">
        <h2 v-rainbow>{{blog.title}}</h2>
      </router-link>
      <p>
        分类：
        <span v-for="(type, index) in blog.type" :key="index">{{type}}</span>
      </p>
      <button @click="delBlogs(index)">删除</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import localStorage from "@/utils/localStorage";

export default {
  data() {
    return {
      searchname: ""
    };
  },
  computed: {
    ...mapState(["blogs"]),
    Showblogs() {
      return this.blogs.filter(b => b.title.includes(this.searchname));
    }
  },
  methods: {
    ...mapMutations(["delBlogs"])
  },
  watch: {
    blogs: {
      handler: localStorage.save,
      deep: true,
      immediate: false
    }
  }
};
</script>

<style scoped>
#ShowBlog {
  margin: 0 auto;
  width: 40vw;
  padding: 2vh 5vw;
}
.blog {
  height: 20vh;
  background: #eee;
  border-radius: 10px;
  padding: 0 10px;
  margin: 10px;
  box-sizing: border-box;
  position: relative;
}
.blog span {
  margin-right: 10px;
}
</style>
