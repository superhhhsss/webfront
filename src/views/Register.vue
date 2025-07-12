<script>
import api from '../api';

export default {
  data() {
    return {
      user: { name: '', email: '', password: '' }
    };
  },
  methods: {
    register: async function () {
      try {
        await api.register(this.user);
        alert('注册成功');
        this.$router.push('/login');
      } catch (e) {
        alert('注册失败');
      }
    }
  }
};
</script>

<template>
  <div>
    <h2>用户注册</h2>
    <input v-model="user.name" placeholder="姓名">
    <input v-model="user.email" placeholder="邮箱">
    <input v-model="user.password" type="password" placeholder="密码">
    <button @click="register">注册</button>
  </div>
</template>

<style scoped>

</style>