<template>
  <div class="posts__container">
    <Post v-if="!loading" v-for="post in posts" :key="post.id" :post="post" />
    <h2 v-else>Loading...</h2>
  </div>
</template>

<script setup>
import Post from './../components/Post.vue'
import { ref, onMounted } from 'vue'

const posts = ref([])
const loading = ref(true)

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    posts.value = data
    loading.value = false
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  margin-top: 30px;
}
</style>
