
import { defineStore } from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
  state: () => ({
    articles: [], // Stores news articles
    loading: false, // Loading state
    error: null, // Error message
  }),
  actions: {
    async fetchNews() {
      try {
        this.loading = true;
        this.error = null;

        // Test your API endpoint here
        const response = await axios.get(
          "https://gnews.io/api/v4/search?q=cryptocurrency&lang=en&token=2a8d84db00fee38b7bac1691cb4efb38"
        );

        // Log the response to confirm the data structure
        console.log("News API Response:", response.data);

        if (response.data && response.data.articles) {
          this.articles = response.data.articles;
        } else {
          this.error = "No articles found.";
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        this.error = "Failed to fetch news. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
  },
});
