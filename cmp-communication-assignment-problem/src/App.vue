<template>
  <div>
    <user-data @add-info="addInfo"></user-data>
    <active-user
      v-for="(user, index) in users"
      :key="index"
      :name="user.name"
      :age="user.age"
    >
    </active-user>
   
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      users: [{ name: "Umid", age: 20 }],
    };
  },
  methods: {
    addInfo(name, age) {
      const newObj = {
        name: name,
        age: age,
      };
      this.users.push(newObj);
    },
  },
};
</script>

<style></style>
