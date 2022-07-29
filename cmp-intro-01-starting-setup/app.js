const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "example@gmail.com",
        },
        {
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleInfo">Show Details</button>
    <ul v-if="infoShow">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
  data() {
    return {
      infoShow: false,
      friend: {
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "example@gmail.com",
      },
    };
  },
  methods: {
    toggleInfo() {
      this.infoShow = !this.infoShow;
    },
  },
});

app.mount("#app");
