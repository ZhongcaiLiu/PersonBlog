<template>
  <div id="ShowBlog">
    <h1>博客总览</h1>
    <input type="text" placeholder="search blogs" />
    <div class="blog" v-for="(blog, index) in blogs" :key="index">
      <h2 v-rainbow>{{blog.title}}</h2>
      <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import localStorage from "@/utils/localStorage";

export default {
  computed: {
    ...mapState(["blogs"])
  }
};
</script>

<style scoped>
#ShowBlog {
  margin: 0 auto;
  width: 40vw;
}
.blog {
  height: 20vh;
  background: #eee;
  border-radius: 5px;
}
</style>
