<template>
  <div>
    <h1>This is my new application.</h1>
    <User v-for="user in users" :key="user.id" :name="user.username" :email="user.email" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import User from './components/User.vue'

const users = ref([])

const user = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json()
    users.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(user)
</script>

<style lang="css" scoped>
h1 {
  color: orange;
  text-align: center;
  font-family: arial;
}
</style>
