const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputVal: "",
      toggle: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputVal);
      console.log(this.tasks);
    },
    showOrHide() {
      this.toggle = !this.toggle;
    },
  },
});

app.mount("#assignment");
