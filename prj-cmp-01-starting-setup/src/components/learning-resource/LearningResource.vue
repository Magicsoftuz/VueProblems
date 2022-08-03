<template>
  <li>
    <header>
      <h3>{{ title }}</h3>
      <button>Delete</button>
    </header>
    <main>
      <p>{{ description }}</p>
      <a :href="link">Go to</a>
    </main>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
