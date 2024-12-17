<template>
  <div class="mx-auto px-4 lg:max-w-screen-lg container md:pt-[32px] pt-[24px]">
    <h1
      class="text-[#42b983] md:text-[32px] text-[24px] md:mb-[30px] mb-[24px]"
    >
      Crypto Industry Leaders
    </h1>
    <div v-if="loading" class="text-[#555] text-[18px] text-center mt-[30px]">
      Loading...
    </div>
    <div v-else>
      <!-- Leader Section -->
      <div v-for="leader in leaders" :key="leader.name" class="mb-6">
        <div class="flex md:gap-4 gap-3">
          <!-- Image Placeholder -->
          <div>
            <img
              :src="leader.image"
              class="md:max-w-[150px] md:h-[150px] max-w-[100px] h-[100px] rounded-[5px] object-cover object-center"
              alt="Leader Image"
            />
          </div>
          <!-- Leader Details -->
          <div>
            <h2 class="font-semibold md:text-[24px] text-[20px] text-[#3d3d3d]">
              {{ leader.name }}
            </h2>
            <p class="md:text-[16px] text-[14px] text-[#555] mt-1">
              <strong>Who:</strong> {{ leader.title }}
            </p>
            <p class="md:text-[16px] text-[14px] text-[#555] my-1">
              <strong>Portfolio:</strong> {{ leader.portfolio }}
            </p>
            <p class="md:text-[16px] text-[14px] text-[#555]">
              <strong>Notable Contributions:</strong> {{ leader.contributions }}
            </p>
            <!-- Social Links -->
            <div class="mt-2">
              <a
                v-for="link in leader.socialLinks"
                :key="link.platform"
                :href="link.url"
                target="_blank"
                class="text-blue-600 text-[14px] hover:underline mr-4"
              >
                {{ link.platform }}
              </a>
            </div>
          </div>
        </div>
        <hr class="my-4 border-t border-gray-300" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      leaders: [
        {
          name: "Changpeng Zhao (CZ)",
          title: "Founder and CEO of Binance",
          portfolio:
            "Holds significant BNB, Bitcoin (BTC), and invests in emerging projects like DeFi.",
          contributions:
            "Built Binance into a global leader in cryptocurrency trading.",
          image: "https://dummyimage.com/150x150/000/fff&text=CZ",
          socialLinks: [
            { platform: "Twitter", url: "https://x.com/cz_binance" },
          ],
        },
        {
          name: "Michael Saylor",
          title: "Executive Chairman of MicroStrategy",
          portfolio:
            "MicroStrategy holds over 150,000 BTC. Personally a Bitcoin maximalist.",
          contributions:
            "Turned MicroStrategy into a major corporate Bitcoin investor.",
          image: "https://dummyimage.com/150x150/000/fff&text=Saylor",
        },
        {
          name: "Vitalik Buterin",
          title: "Co-founder of Ethereum",
          portfolio:
            "Holds Ethereum (ETH), donated to charities like SHIB and DOGE.",
          contributions: "Created Ethereum, enabling smart contracts and NFTs.",
          image: "https://dummyimage.com/150x150/000/fff&text=Vitalik",
          socialLinks: [
            { platform: "Twitter", url: "https://x.com/VitalikButerin" },
          ],
        },
        {
          name: "Elon Musk",
          title: "CEO of Tesla, SpaceX, and Twitter",
          portfolio: "Owns Bitcoin (BTC), Ethereum (ETH), and Dogecoin (DOGE).",
          contributions:
            "Drives crypto adoption and market influence with public statements.",
          image: "https://dummyimage.com/150x150/000/fff&text=Elon",
          socialLinks: [{ platform: "Twitter", url: "https://x.com/elonmusk" }],
        },
        {
          name: "Tim Draper",
          title: "Venture capitalist and early Bitcoin adopter",
          portfolio:
            "Purchased 30,000 BTC in 2014 and invests in projects like Tezos.",
          contributions: "Advocates Bitcoin as the currency of the future.",
          image: "https://dummyimage.com/150x150/000/fff&text=Draper",
          socialLinks: [
            { platform: "Twitter", url: "https://x.com/TimDraper" },
          ],
        },
        {
          name: "Tyler and Cameron Winklevoss",
          title: "Founders of the Gemini crypto exchange",
          portfolio:
            "Own over 70,000 BTC, with investments in Ethereum (ETH), Filecoin (FIL), and other projects.",
          contributions:
            "Created Gemini, a regulated exchange popular for institutional investors.",
          image: "https://dummyimage.com/150x150/000/fff&text=Winklevoss",
        },
        {
          name: "Barry Silbert",
          title: "Founder and CEO of Digital Currency Group (DCG)",
          portfolio:
            "DCG owns Grayscale Investments and has investments in Coinbase, Ripple, and Zcash (ZEC).",
          contributions:
            "Major force in crypto venture capital and institutional investments.",
          image: "https://dummyimage.com/150x150/000/fff&text=Silbert",
          socialLinks: [
            { platform: "Twitter", url: "https://x.com/barrysilbert" },
          ],
        },
        {
          name: "Chris Larsen",
          title: "Co-founder of Ripple Labs (XRP)",
          portfolio:
            "Holds large amounts of XRP and invests in crypto and fintech startups.",
          contributions: "Helped develop RippleNet for cross-border payments.",
          image: "https://dummyimage.com/150x150/000/fff&text=Larsen",
          socialLinks: [
            { platform: "Twitter", url: "https://x.com/chrislarsensf" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
hr {
  border-color: #e2e8f0;
}
</style>
