<template>
  <div>
    <h2>My friends</h2>
    <ul>
      <li>Salom</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Umid",
          email: "rustamov@gmail.com",
          phone: "99983332",
        },
        {
          id: "julia",
          name: "Julia",
          email: "julia@gmail.com",
          phone: "343234234",
        },
      ],
    };
  },
  methods: {},
};
</script>
