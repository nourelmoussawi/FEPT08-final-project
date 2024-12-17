<template>
    <nav class="bg-teal-800 p-4">
      <div class="container  lg:max-w-screen-lg mx-auto flex justify-between items-center px-4">
        <!-- Logo Section -->
        <div class="text-white font-bold text-[24px]">
          <a href="/" class="flex items-center ">
            Crypto
          </a>
        </div>
  
        <!-- Navigation Links (Visible on large screens) -->
        <div class="hidden md:flex space-x-6">
          <a href="/" class="text-white hover:text-orange-500 transition-all duration-200 text-[18px]">Home</a>
          <a href="/news" class="text-white hover:text-orange-500 transition-all duration-200 text-[18px]">News</a>
          <a href="/crypto-leaders" class="text-white hover:text-orange-500 transition-all duration-200 text-[18px]">Crypto Leaders</a>
        </div>
  
        <!-- Hamburger Menu (Visible on small screens) -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            class="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu (Visible on small screens) -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="flex flex-col items-center space-y-4 py-4">
          <a href="/" class="text-white hover:text-orange-500 transition-all duration-200">Home</a>
          <a href="/news" class="text-white hover:text-orange-500 transition-all duration-200">News</a>
          <a href="/crypto-leaders" class="text-white hover:text-orange-500 transition-all duration-200">Crypto Leaders</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  