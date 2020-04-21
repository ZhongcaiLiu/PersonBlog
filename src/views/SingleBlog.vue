<template>
  <div id="SingBlog">
    <!-- 通过$route获取路由参数 -->
    <!-- <h2>{{$route.params.title}}</h2>
      <p>{{$route.params.content}}</p>
    <p>{{$route.params.author}}</p>-->

    <!-- 通过props获取路由参数 -->
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <p>作者：{{author}}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "author"]
};
</script>

<style scoped>
#SingBlog {
  width: 40vw;
  margin: 20px auto;
  background: #eee;
  padding: 20px;
  border-radius: 10px;
}
p:nth-of-type(2) {
  text-align: right;
  margin-right: 3vw;
}
</style>