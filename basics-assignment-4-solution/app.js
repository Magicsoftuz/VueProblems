const app = Vue.createApp({
  data() {
    return {
      className: "",
      showOrHide: true,
      color: "",
    };
  },
  methods: {
    getInput(val) {
      this.className = val.target.value;
      console.log(this.className);
    },
    clickBtn() {
      this.showOrHide = !this.showOrHide;
      console.log(this.showOrHide);
    },
    getColor(val) {
      this.color = val.target.value;
    },
  },
  computed: {
    fixClass() {
      if (this.className == "user1") {
        return { user1: true };
      } else if (this.className == "user2") {
        return { user2: true };
      }
    },
    showOrNot() {
      if (this.showOrHide) {
        return { visible: true, hidden: false };
      } else {
        return { visible: false, hidden: true };
      }
    },
  },
});

app.mount("#assignment");
