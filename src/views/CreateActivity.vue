<script>
import api from '../api';

export default {
  data() {
    return {
      form: { name: '', description: '' }
    };
  },
  methods: {
    submit: async function () {
      await api.createActivity(this.form);
      alert('创建成功');
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div>
    <h2>创建活动</h2>
    <input v-model="form.name" placeholder="活动名称">
    <textarea v-model="form.description" placeholder="活动描述"></textarea>
    <button @click="submit">提交</button>
  </div>
</template>

<style scoped>

</style>