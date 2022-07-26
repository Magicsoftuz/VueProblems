const app = Vue.createApp({
  data() {
    return {
      result: 0,
      textResult: "",
    };
  },
  watch: {
    result(newVal, oldVal) {
      if (newVal < 37) {
        this.textResult = "Not there yet";
      } else if (newVal > 37) {
        this.textResult = "Too much!";
      } else {
        this.textResult = "Exactly 37";
      }
    },
    result(newVal, oldVal) {
      setInterval(() => {
        this.result = 0;
      }, 5000);
    },
  },
  methods: {
    addNumber(val) {
      this.result = this.result + val;
      this.setText;
    },
  },
});

app.mount("#assignment");
