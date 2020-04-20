<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from "@/components/BlogHeader";

export default {
  name: "App",
  components: {
    BlogHeader
  },
};
</script>
<style>
#app{
  overflow-x: hidden;
}
input[type="text"] {
  width: 100%;
  height: 5vh;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
