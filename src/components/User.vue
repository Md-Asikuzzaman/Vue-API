<template>
  <div class="card">
    <h1>User name is: {{ name }}</h1>
    <h1>user email is: {{ email }}</h1>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  email: String
})
</script>

<style lang="css">
.card {
  background-color: blueviolet;
  width: fit-content;
  padding: 20px 40px;
  margin: 20px auto;
  color: white;
  border-radius: 30px;
  font-family: arial;
}
</style>
