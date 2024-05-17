<script setup>
  import BlogSect from '../components/BlogSection.vue'
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const posts = ref([]);

  const fetchPosts = async () => {
    try {
      const {data} = await axios.get(`https://cdn.contentful.com/spaces/6hfxs37cv985/environments/master-2024-05-16/assets?access_token=DmiM5HZ8uYrqosww_d4NI6y7xAN4B_LkaHJnbRlpBD8`
      );
      posts.value = data.items
      console.log(data.items)
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  onMounted(fetchPosts);
</script>

<template>
  <main>
    <div class="infoSect">
      I made this little project to showcase my on going familiarity with the framework, built with Vue.js, this interactive project fetches blog content from Contentful, a headless CMS, using its REST API. The data is then dynamically rendered on the UI.
    </div>
    <BlogSect v-for="post in posts" :title="post.fields.title" :description="post.fields.description" />
  </main>
</template>

<style scoped>
.infoSect{
  border: solid 2px hsla(160, 100%, 37%, 1);
  background-color: rgba(235, 235, 235, 0.829);
  border-radius: 4px;
  padding: 8px;
  width: 90%;
  
}
  main{
   
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
