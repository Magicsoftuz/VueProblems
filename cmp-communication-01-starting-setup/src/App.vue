<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addContactInfo"></new-friend>
    <ul>
      <friend-contact
        v-for="(friend, index) in friends"
        :key="index"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :favorite="friend.favorite"
        @toggle-fav="toggleFavoriteStatus"
        @delete="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { NewFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          favorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          favorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      console.log("Hell");
      const friendObj = this.friends.find((friend) => friend.id === friendId);
      friendObj.favorite = !friendObj.favorite;
    },
    addContactInfo(name, phone, email) {
      const newFriendObj = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        favorite: false,
      };
      this.friends.push(newFriendObj);
    },
    deleteFriend(id) {
      this.friends = this.friends.filter((val) => val.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
  display: block;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: block;
}
#app form div {
  margin: 0 auto;
  margin: 1rem 0;
}
</style>
