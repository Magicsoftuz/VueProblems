<template>
  <ul>
    <learning-resource
      v-for="resource in resourceData"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResourceVue from './components/learning-resource/LearningResource.vue';
export default {
  components: {
    'learning-resource': LearningResourceVue,
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

<style scoped></style>
