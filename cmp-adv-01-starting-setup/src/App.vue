<template>
  <div>
    <the-header></the-header>
    <button @click="changeCmp('active-goals')">Active goals</button>
    <button @click="changeCmp('manage-goals')">Manage goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeaderVue from "./components/layout/TheHeader.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoalsVue from "./components/ActiveGoals.vue";

export default {
  components: {
    "the-header": TheHeaderVue,
    "manage-goals": ManageGoals,
    "active-goals": ActiveGoalsVue,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    changeCmp(cpm) {
      this.selectedComponent = cpm;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
