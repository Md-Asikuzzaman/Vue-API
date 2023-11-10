<template>
  <div v-if="!loading" class="card">
    <h2>User: {{ post.username }}</h2>
    <h2>Email: {{ post.email }}</h2>
    <h2>Phone: {{ post.phone }}</h2>
    <h2>Website: {{ post.website }}</h2>
  </div>

  <div v-else>
    <h2>Loading...</h2>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.params

const post = ref({})
const loading = ref(true)

const fetchPost = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    post.value = data
    loading.value = false
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchPost()
})
</script>
<style lang="css" scoped>
.card {
  background: linear-gradient(-45deg, rgb(109, 2, 210), blueviolet);
  padding: 30px;
  border-radius: 0.6rem;
  color: white;
  margin-top: 30px;
}

h2 {
  font-size: 1.5rem;
  margin: 10px 0;
}
</style>
