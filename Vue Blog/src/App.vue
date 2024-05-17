<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div id="logoDiv">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="46" height="46" />
      <h2>Vue Blog</h2>
    </div>
    <!--
      <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/">Blogs</RouterLink>
      <RouterLink to="/">Contacts</RouterLink>
    </nav>
     -->
    <h3>Antony</h3>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 54px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  box-shadow: 0 8px 16px 0 rgba(54, 53, 53, 0.3);
  background-color: white;
}
#logoDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  margin: 8px;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
  
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
