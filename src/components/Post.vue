<template>
  <div class="card">
    <h2>User: {{ username }}</h2>
    <h2>Email: {{ email }}</h2>
    <button class="card__btn">Details</button>
  </div>
</template>
<script setup>
defineProps({
  username: String,
  email: String
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
    font-size: 1.2rem;
}

.card__btn {
  cursor: pointer;
  padding: 0.5rem 2rem;
  border: none;
  outline: none;
  border-radius: 99px;
  margin-top: 20px;
}
</style>
