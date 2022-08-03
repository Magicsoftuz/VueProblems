<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
      <main>
        <p>{{ description }}</p>
        <a :href="link">Go to</a>
      </main>
    </base-card>
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

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
