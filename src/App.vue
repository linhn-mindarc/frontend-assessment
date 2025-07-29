<template>
  <div id="app">
    <nav class="navigation">
      <div class="navigation__container">
        <router-link to="/" class="navigation__brand">Frontend Assessment</router-link>
        <div class="navigation__links">
          <router-link to="/" class="navigation__link" :class="{ 'navigation__link--active': $route.name === 'Home' }">Home</router-link>
          <router-link to="/exercise1" class="navigation__link" :class="{ 'navigation__link--active': $route.name === 'Exercise1' }">Exercise 1</router-link>
          <router-link to="/exercise2" class="navigation__link" :class="{ 'navigation__link--active': $route.name === 'Exercise2' }">Exercise 2</router-link>
        </div>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
