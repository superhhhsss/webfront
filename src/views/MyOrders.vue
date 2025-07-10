<script>
import api from '../api';

export default {
  data() {
    return {
      orders: []
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: async function () {
      this.orders = (await api.getOrders()).data;
    }
  }
};
</script>

<template>
  <div>
    <h2>我的活动订单</h2>
    <ul>
      <li v-for="order in orders" :key="order.id">{{ order.activityName }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>