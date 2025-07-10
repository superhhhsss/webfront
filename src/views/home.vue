<script>
import api from '../api';
import ActivityCard from '../components/ActivityCard.vue';

export default {
  components: { ActivityCard },
  data() {
    return { activities: [] };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: async function () {
      this.activities = (await api.getActivities()).data;
    }
  }
};
</script>

<template>
  <div>
    <h2>体育活动列表</h2>
    <ActivityCard v-for="a in activities" :key="a.id" :activity="a" />
  </div>
</template>

<style scoped>

</style>