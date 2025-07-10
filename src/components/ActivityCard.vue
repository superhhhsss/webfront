<script>
export default {
  name: 'ActivityCard',
  props: {
    activity: Object
  }
};
</script>
<template>
  <div class="activity-card">
    <h3>{{ activity.name }}</h3>
    <p>{{ activity.description }}</p>
    <router-link :to="`/activity/${activity.id}`">查看详情</router-link>
  </div>
</template>

<style scoped>.activity-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 12px;
}

</style>