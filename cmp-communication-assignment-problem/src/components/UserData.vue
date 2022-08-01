<template>
  <div>
    <form @submit.prevent="addInfo">
      <label>Name</label>
      <input v-model="name" required type="text" />
      <label>Age</label>
      <input v-model="age" required type="number" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods: {
    addInfo() {
      this.$emit("add-info", this.name, this.age);
    },
  },
};
</script>

<style></style>
