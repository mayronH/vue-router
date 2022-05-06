<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style>
#app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
}
</style>
