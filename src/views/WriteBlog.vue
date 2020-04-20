<template>
  <div id="WriteBlog">
    <div class="writeblog" v-if="key">
      <h2>写博客</h2>
      <h3>主题：</h3>
      <input type="text" placeholder="请输入你要写的博客主题" v-model="blog.title" />
      <h3>内容：</h3>
      <textarea name="content" v-model="blog.content"></textarea>
      <h3>分类：</h3>
      <div class="type">
        <span>Vue.js</span>
        <input type="checkbox" name="type" value="Vue.js" v-model="blog.type" />
      </div>
      <div class="type">
        <span>Angular4</span>
        <input type="checkbox" name="type" value="Angular4" v-model="blog.type" />
      </div>
      <div class="type">
        <span>Node.js</span>
        <input type="checkbox" name="type" value="Node.js" v-model="blog.type" />
      </div>
      <div class="type">
        <span>React.js</span>
        <input type="checkbox" name="type" value="React.js" v-model="blog.type" />
      </div>

      <h3>作者：</h3>
      <select name="author" v-model="blog.author">
        <option value="Lzc">Lzc</option>
        <option value="Liul">Liul</option>
      </select>
      <button @click="addBlog">添加博客</button>
    </div>
    <div class="addblog" v-else>
      <h2>写博客</h2>
      <p>感谢所添加的内容！</p>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import localStorage from "@/utils/localStorage";

export default {
  data() {
    return {
      key: true,
      blog: {
        title: "",
        content: "",
        type: [],
        author: ""
      }
    };
  },
  methods: {
    addBlog() {
      this.key = !this.key;
      this.$store.commit("addBlogs", this.blog);
    }
  },
  computed: {
    ...mapState(["blogs"])
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
#WriteBlog {
  margin: 0 auto;
  width: 40vw;
}
textarea {
  width: 100%;
  height: 20vh;
  box-sizing: border-box;
}
.type {
  display: inline-block;
  margin-right: 40px;
}
select {
  width: 100%;
}
button {
  background: red;
  color: #fff;
  border: none;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  outline: none;
}
</style>