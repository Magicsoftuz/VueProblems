const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      console.dir(this.$refs.userBtn.textContent);
      this.message = this.$refs.userBtn.textContent;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("Mounted()");
  },
});

// const app2 = Vue.createApp({
//   template: ` <p>{{meal}}</p>`,
//   data() {
//     return {
//       meal: "Qozon kavob",
//     };
//   },
// });

// app2.mount("#app2");

// let message = "Hello";

// let extraMessage = message + " world!";

// message = "Salom";

// console.log(extraMessage);

// let data = {
//   message: "Hello",
//   currentUserInput: "",
// };

// const handler = {
//   set(target, key, value) {
//     if (key === "message") {
//       target.currentUserInput = value + "World!";
//     }
//     target.message = value;
//   },
// };

// const proxy = new Proxy(data, handler);

// proxy.message = "Hello!!!";
// console.log(proxy.currentUserInput);

app.mount("#app");
