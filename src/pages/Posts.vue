<template>
  <div class="posts__container">
    <Post v-for="post in posts" :key="post.id" :username="post.username" :email="post.email" />
  </div>
</template>

<script setup>
import Post from './../components/Post.vue'
import { ref, onMounted } from 'vue'

const posts = ref([])

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    posts.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<style lang="css" scoped>
.posts__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
}
</style>
