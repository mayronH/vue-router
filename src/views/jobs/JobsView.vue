<template>
  <main>
    <h1>Jobs</h1>

    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'jobDetail', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: "First Title", details: "Lorem ipsum dolor sit amet." },
        {
          id: 2,
          title: "Second Title",
          details: "Lorem ipsum dolor sit amet.",
        },
        { id: 3, title: "Third Title", details: "Lorem ipsum dolor sit amet." },
      ],
    };
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
