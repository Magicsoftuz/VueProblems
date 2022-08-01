<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name:</label>
      <input v-model="enteredName" type="text" />
      <label>Phone:</label>
      <input v-model="enteredPhone" type="text" />
      <label>Email:</label>
      <input v-model="enteredEmail" type="text" />
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emit: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    addContact() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
