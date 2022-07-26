const app = Vue.createApp({
  data() {
    return { goals: [], inputValue: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputValue);
    },
    removeGoal(id) {
      this.goals.splice(id, 1);
    },
  },
});

app.mount("#user-goals");
