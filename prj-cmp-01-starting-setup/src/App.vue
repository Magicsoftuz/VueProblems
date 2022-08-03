<template>
  <store-resource :resources="resourceData"></store-resource>
</template>

<script>
import StoreResourceVue from './components/learning-resource/StoreResource.vue';
export default {
  components: {
    'store-resource': StoreResourceVue,
  },
  data() {
    return {
      resourceData: [
        {
          id: 'resource-vue',
          title: 'Resource Vue',
          description: 'You can learn anything about Vue',
          link: 'https://vue.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'How to keyword on google',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
