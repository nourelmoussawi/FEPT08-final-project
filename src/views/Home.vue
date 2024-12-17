<template>
  <div class="mx-auto px-4 lg:max-w-screen-lg container md:pt-[32px] pt-[24px]">
    <h1 class="text-[#42b983] md:text-[32px] text-[24px] md:mb-[30px] mb-[18px]">Cryptocurrency Prices</h1>

    <!-- Search Bar -->
    <div class="mb-[20px]">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or symbol..."
        class="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-[#42b983]"
      />
    </div>

    <div v-if="cryptoStore.loading" class="text-[#555] text-[18px] text-center mt-[30px]">
      Loading cryptocurrency data...
    </div>
    <div v-else>
      <!-- Scrollable Table Wrapper -->
      <div class="overflow-x-auto">
        <!-- Table Header -->
        <div class="flex items-center justify-between pl-5 pr-4 border-y md:py-3 py-2.5 min-w-[700px]">
          <div class="flex-1 md:text-[14px] text-[13px] font-semibold">Coin</div>
          <div class="flex-1 md:text-[14px] text-[13px] text-right font-semibold">Price</div>
          <div class="flex-1 md:text-[14px] text-[13px] text-right font-semibold">24h Volume</div>
          <div class="flex-1 md:text-[14px] text-[13px] text-right font-semibold">Market Cap</div>
        </div>

        <!-- Table Rows -->
        <div
          v-for="coin in filteredCoins"
          :key="coin.id"
          class="flex items-center justify-between border-b md:py-5 py-3.5 hover:bg-gray-50 px-4 transition-all duration-200 min-w-[700px]"
        >
          <div class="flex items-center gap-2 flex-1">
            <div>
              <img :src="coin.image" :alt="coin.name" class="w-[25px]" />
            </div>

            <div class="flex items-center gap-2">
              <span class="text-gray-700 font-semibold md:text-[16px] text-[14px]">{{ coin.name }}</span>
              <span class="text-gray-500 md:text-[13px] text-[11px] uppercase">{{ coin.symbol.toUpperCase() }}</span>
            </div>
          </div>

          <div class="flex-1 text-gray-700 text-right md:text-[16px] text-[14px]">${{ coin.current_price.toLocaleString() }}</div>
          <div class="flex-1 text-gray-700 text-right md:text-[16px] text-[14px]">${{ coin.total_volume.toLocaleString() }}</div>
          <div class="flex-1 text-gray-700 text-right md:text-[16px] text-[14px]">${{ coin.market_cap.toLocaleString() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, computed } from "vue"; // Import ref and computed
import { useCryptoStore } from "../stores/crypto";

export default {
  name: "Home",
  setup() {
    const cryptoStore = useCryptoStore();

    // Fetch cryptocurrency data when the component is mounted
    cryptoStore.fetchCoins();

    // Search query state
    const searchQuery = ref("");

    // Computed property to filter coins
    const filteredCoins = computed(() =>
      cryptoStore.coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    return {
      cryptoStore,
      searchQuery,
      filteredCoins,
    };
  },
};
</script>

