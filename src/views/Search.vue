<script>
import api from '../api';

export default {
  data() {
    return {
      keyword: '',
      results: []
    };
  },
  methods: {
    search: async function () {
      if (this.keyword.length > 1) {
        this.results = (await api.searchActivities(this.keyword)).data;
      }
    }
  }
};
</script>

<template>
  <div>
    <h2>搜索活动</h2>
    <input v-model="keyword" @input="search" placeholder="关键词">
    <ul>
      <li v-for="a in results" :key="a.id">{{ a.name }}</li>
    </ul>
  </div>

</template>

<style scoped>

</style>