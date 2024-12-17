// stores/crypto.js
import { defineStore } from "pinia";
import axios from "axios";

export const useCryptoStore = defineStore("crypto", {
  state: () => ({
    coins: [], // Stores API response data
    loading: false, // Loading state
  }),
  actions: {
    async fetchCoins() {
      try {
        this.loading = true;
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-8fvGJrhsWCQLj512eJVE6RPB"
        );
        this.coins = response.data; // Save API response in the store
      } catch (error) {
        console.error("Failed to fetch cryptocurrency data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
