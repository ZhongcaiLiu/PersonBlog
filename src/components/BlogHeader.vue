<template>
  <div id="BlogHeader">
    <router-link to="/">博客</router-link>
    <router-link to="/add">写博客</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#BlogHeader{
    width: 100vw;
    height: 10vh;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
a{
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    margin-right: 20px;
}
.router-link-exact-active{
    background: rgba(255,255,255,0.5);
    border-radius: 10px;
    padding: 10px;
}
</style>