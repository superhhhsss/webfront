<script>
export default {
  name: 'CommentList',
  props: {
    comments: Array
  }
};
</script>

<template>
  <div class="comment-list">
    <h4>评论区</h4>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.content }}</li>
    </ul>
  </div>
</template>

<style scoped>
.comment-list {
  margin-top: 20px;
}
.comment-list ul {
  padding: 0;
  list-style-type: none;
}
.comment-list li {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
</style>