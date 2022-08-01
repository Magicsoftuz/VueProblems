<template>
  <li>
    <h2>{{ name }} {{ favorite ? "(Favorite friend)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <hr />
    <button @click="toggleFav">
      {{ favorite == "0" ? "Add" : "Remove" }} Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phone", "email", "favorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emit: ["toggle-fav"],
  emit: {
    "toggle-fav": function (id) {
      if (id) {
        return true;
      } else {
        console.log("Id is missing!");
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      this.$emit("toggle-fav", this.id);
    },
  },
};
</script>
