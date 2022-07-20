const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      formName: "",
      getNameInput: "",
    };
  },
  methods: {
    getName() {
      this.getNameInput = this.name;
    },
    submitForm() {
      alert(`Hello ${this.formName}!`);
    },
    getInputValue(event) {
      this.formName = event.target.value;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    },
    reset(num) {
      this.counter = num;
    },
  },
});

app.mount("#events");
