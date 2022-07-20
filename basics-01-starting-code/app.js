const app = Vue.createApp({
  data() {
    return {
      goal1: "<h2 style='color:white'>Learn new technologies and skills</h2>",
      goal2: "You have mastered VueJS",
      link: "https://magicsoft.uz",
    };
  },
  methods: {
    randomNumber() {
      const a = Math.random();
      if (a > 0.5) {
        console.log(a);
        return this.goal1;
      } else {
        console.log(a);
        return this.goal2;
      }
    },
  },
});

app.mount("#user-goal");
