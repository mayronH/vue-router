<template>
  <!-- Without the if, the vue will return an error. When the page load the job is null, only after the fetch return a response that job have properties, so when loaded u can't get the title and details. -->
  <main v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.details }}</p>
  </main>
  <main v-else>
    <p>Loading Job Details...</p>
  </main>
</template>

<script>
export default {
  // To get the router params as props, the props property on the router component must be true
  props: ["id"],
  data() {
    return {
      job: null,
      // Using the router object to get the value of id
      // id: this.$route.params.id,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => response.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
</style>