<template>
  <div>
    <h2>Name: {{ name }}</h2>
    <h3>Age: {{ age }}</h3>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
