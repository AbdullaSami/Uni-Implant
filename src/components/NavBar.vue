<template>
  <nav
    :class="[
      'dark:bg-gray-900 fixed w-full z-20 top-0 start-0 transition-all duration-500',
      isScrolled ? 'test' : 'bg-transparent',
    ]"
  >
    <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link
        :to="{ name: 'app.home', hash: '#main' }"
        class="flex items-center space-x-3"
      >
        <img src="@/assets/logo.png" class="h-10" alt="Logo" />
      </router-link>
      <div class="flex md:order-2 space-x-3 md:space-x-0">
        <router-link
          :to="{ name: 'app.contact-us', hash: '#main' }"
          type="button"
          class="text-white bg-transparent hover:bg-white hover:text-zinc-900 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-2xl border hover:ring-3 hover:ring-salt-200 transition-colors duration-300 text-sm px-4 py-2 text-center md:w-44"
        >
          Contact Us
        </router-link>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-16 md:flex-row md:mt-0 md:border-0 md:bg-transparent"
        >
          <li>
            <router-link
              :to="{ name: 'app.home', hash: '#main' }"
              class="block py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'app.about', hash: '#main' }"
              class="block py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              About Us
            </router-link>
          </li>
<li>
  <button
    id="dropdownNavbarLink"
    data-dropdown-toggle="dropdownNavbar"
    class="flex items-center justify-between w-full py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
  >
    Products
    <svg
      class="w-2.5 h-2.5 ms-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <!-- Main Dropdown -->
  <div
    id="dropdownNavbar"
    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      
      <!-- Implants -->
      <li>
        <button
          id="dropdownImplants"
          data-dropdown-toggle="submenuImplants"
          data-dropdown-placement="right-start"
          type="button"
          class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Implants
          <svg class="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div id="submenuImplants" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-48 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Uni-Conic</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">UNI-Plus</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">UNI-piece</a></li>
          </ul>
        </div>
      </li>

      <!-- Prosthetic -->
      <li>
        <button
          id="dropdownProsthetic"
          data-dropdown-toggle="submenuProsthetic"
          data-dropdown-placement="right-start"
          type="button"
          class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Prosthetic
          <svg class="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div id="submenuProsthetic" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Cementable Solutions</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Overdenture Solutions</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Multi-Unit Solutions</a></li>
          </ul>
        </div>
      </li>

      <!-- Digital Solutions -->
      <li>
        <button
          id="dropdownDigital"
          data-dropdown-toggle="submenuDigital"
          data-dropdown-placement="right-start"
          type="button"
          class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Digital Solutions
          <svg class="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div id="submenuDigital" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Ti-Base Abutment</a></li>
            <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Multi-Unit Ti-Base</a></li>
          </ul>
        </div>
      </li>

      <!-- Kits -->
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Kits</a>
      </li>

    </ul>
  </div>
</li>

          <li>
            <router-link
              :to="{ name: 'app.download', hash: '#main' }"
              class="block py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              Downloads
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'app.contact-us', hash: '#main' }"
              class="block py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.test {
  background-color: rgba(0, 0, 0, 0.8);
  /* padding: 5px; */
}
</style>
