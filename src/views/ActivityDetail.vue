<script>
import api from '../api';

export default {
  data() {
    return {
      activity: { comments: [] },
      comment: ''
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: async function () {
      const id = this.$route.params.id;
      this.activity = (await api.getActivity(id)).data;
    },
    join: async function () {
      await api.joinActivity(this.activity.id);
      alert('报名成功');
    },
    addComment: async function () {
      await api.addComment(this.activity.id, { content: this.comment });
      this.load();
      this.comment = '';
    }
  }
};
</script>

<template>
  <div>
    <h2>{{ activity.name }}</h2>
    <p>{{ activity.description }}</p>
    <button @click="join">报名活动</button>
    <h3>评论</h3>
    <ul>
      <li v-for="comment in activity.comments" :key="comment.id">{{ comment.content }}</li>
    </ul>
    <input v-model="comment" placeholder="输入评论">
    <button @click="addComment">提交</button>
  </div>
</template>

<style scoped>

</style>