<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set goal</button>
    <teleport to="body">
      <error-alert v-if="invalidInput">
        <h2>Error alert input</h2>
        <p>You must enter any words in input</p>
        <button class="okay" @click="okayBtn">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlertVue from "./ErrorAlert.vue";

export default {
  components: {
    "error-alert": ErrorAlertVue,
  },
  data() {
    return {
      invalidInput: false,
    };
  },
  methods: {
    setGoal() {
      const inputVal = this.$refs.goal.value;
      console.log("FFF: " + inputVal);
      if (!inputVal) {
        this.invalidInput = true;
      }
    },
    okayBtn() {
      this.invalidInput = false;
    },
  },
};
</script>

<style scoped>
.okay {
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: black;
  right: 0;
}
</style>
