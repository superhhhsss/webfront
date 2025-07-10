<script >
export default {
  name: 'App'
};
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/create">创建活动</router-link>
      <router-link to="/orders">我的订单</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f2f5;
}
nav {
  background-color: #333;
  padding: 1em;
  display: flex;
  gap: 1em;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
