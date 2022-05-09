<template>
  <header>
    <nav>
      <!-- Route name is case sensitive -->
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    </nav>

    <div class="buttons">
      <button @click="redirect">Redirect</button>
      <button @click="goback">Go Back</button>
      <button @click="goforward">Go Forward</button>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      // Redirect to another route
      this.$router.push({ name: "home" });
    },
    goback() {
      // $route = currenct route
      // $router = all routes
      this.$router.go(-1); // Go back 1 page
    },
    goforward() {
      this.$router.go(1); // Go forward 1 page
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
}

header .buttons {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 15px;
}

header .buttons button {
  border: none;
  padding: 0.8rem 1rem;

  background: #fff;
  cursor: pointer;
}
</style>
