<template>
  <main>
    <h1>Jobs</h1>

    <div v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
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
