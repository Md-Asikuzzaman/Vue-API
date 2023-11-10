<template>
  <div class="card">
    <h2>User: {{ post.username }}</h2>
    <h2>Email: {{ post.email }}</h2>
    <button class="card__btn" @click="$router.push(`posts/${post.id}`)">Details</button>
  </div>
</template>

<script setup>
defineProps({
  post: Object
})
</script>

<style lang="css" scoped>
.card {
  background: linear-gradient(-45deg, rgb(109, 2, 210), blueviolet);
  padding: 30px;
  border-radius: 0.6rem;
  color: white;
}

h2 {
  font-size: 1rem;
  margin: 5px 0;
}

.card__btn {
  cursor: pointer;
  padding: 0.5rem 2rem;
  border: none;
  outline: none;
  border-radius: 99px;
  margin-top: 40px;
  background-color: #fff;
  color: #333;
}
</style>
