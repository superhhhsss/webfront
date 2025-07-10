<script>
import api from '../api';

export default {
  data() {
    return {
      user: { email: '', password: '' }
    };
  },
  methods: {
    login: async function () {
      try {
        const res = await api.login(this.user);
        alert('登录成功');
        this.$router.push('/');
      } catch (e) {
        alert('登录失败');
      }
    }
  }
};
</script>

<template>
  <div>
    <h2>用户登录</h2>
    <input v-model="user.email" placeholder="邮箱">
    <input v-model="user.password" type="password" placeholder="密码">
    <button @click="login">登录</button>
  </div>
</template>

<style scoped>

</style>