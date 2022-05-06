<template>
  <main>
    <h1>Job Detail Page</h1>
  </main>
</template>

<script>
export default {
  // To get the router params as props, the props property on the router component must be true
  props: ["id"],
  data() {
    return {
      // Using the router object to get the value of id
      // id: this.$route.params.id,
    };
  },
};
</script>

<style>
</style>