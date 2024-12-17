<template>
    <div class="mx-auto px-4 lg:max-w-screen-lg container md:pt-[32px] pt-[24px] ">
        <h1 class="text-[#42b983] md:text-[32px] text-[24px] md:mb-[30px] mb-[24px]">Latest Crypto News</h1>
      <div v-if="loading" class="text-[#555] text-[18px] text-center mt-[30px]">Loading news...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else>
        <div v-for="article in newsStore.articles" :key="article.url" class="md:mb-8 mb-4">
            <div class="flex md:gap-4 gap-3">
                <div>
                    <img
          :src="article.image && isValidUrl(article.image) ? article.image : 'https://dummyimage.com/200x200/d3d3d3/000&text=404'"
          class="md:max-w-[200px] md:h-[200px] max-w-[120px] h-[120px] rounded-[5px] object-cover object-center"
          alt="Article Image"
        />
            </div>
         <div>
            <div class="md:text-[14px] text-[13px] text-[#3d3d3d]">Published:  {{ formatDate(article.publishedAt) }}</div>
            <h2 class="font-semibold md:text-[24px] text-[20px]">{{ article.title }}</h2>
          <p class="md:my-2 my-[3px] text-[14px] md:text-[16px] text-[#3d3d3d]">{{ article.description }}</p>
          <a :href="article.url" target="_blank" class="text-blue-600 text-[13px] hover:underline">Read more</a>
         </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useNewsStore } from "../stores/news";
  
  export default {
    setup() {
      const newsStore = useNewsStore();
      newsStore.fetchNews();
  
      return {
        newsStore,
      };
    },

    methods: {
    formatDate(date) {
      const options = { 
        day: '2-digit', 
        month: 'short', 
        hour: '2-digit', 
        minute: '2-digit' 
      };
      const formattedDate = new Date(date).toLocaleString('en-GB', options);
      return formattedDate.replace(',', ''); // Remove the comma between date and time
    },
    isValidUrl(url) {
    // A basic check to see if the URL starts with 'http' and ends with an image extension.
    return /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(url);
  }
  }
  };
  </script>
  