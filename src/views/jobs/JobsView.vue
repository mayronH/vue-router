<template>
  <main>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'jobDetail', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading Jobs...</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  // Fetch request. Using in mounted is the best, will only fetch when the view is called.
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((data) => (this.jobs = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style scoped>
.job {
  padding: 20px;
  margin-bottom: 15px;

  min-width: 10rem;

  text-align: center;

  background-color: var(--accent);
}
.job h2 {
  margin: 0;
}
a {
  color: var(--text);
  text-decoration: none;
}
</style>
