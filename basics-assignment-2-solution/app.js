const app = Vue.createApp({
  data() {
    return {
      alertText: "Alert works!",
      inputValue: "",
      inputValueEnter: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertText);
    },
    getInputValue(event) {
      this.inputValue = event.target.value;
    },
    getInputValueEnter(event) {
      this.inputValueEnter = event.target.value;
    },
  },
});

app.mount("#assignment");
