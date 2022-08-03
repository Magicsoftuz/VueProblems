<template>
  <section>
    <ul>
      <li v-for="(goal, index) in goals" :key="index">
        <slot :item="goal"></slot>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Learn vue", "I will be a master Vue"],
    };
  },
};
</script>

<style scoped></style>
