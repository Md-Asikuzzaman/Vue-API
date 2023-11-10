<template>
  <header>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/posts">Posts</router-link></li>
    </ul>
  </header>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script setup></script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: arial;
}

header {
  background-color: blueviolet;
}

ul {
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  gap: 140px;
}

ul li a {
  text-decoration: none;
  color: #cccccc;
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.option--active {
  color: #fff;
}
</style>
