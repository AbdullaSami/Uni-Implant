<script setup></script>

<template>
  <div class="my-16 md:my-32">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6 md:px-28">
<div class="h-auto md:h-[65vh] flex justify-end items-start px-4 md:px-8">
  <router-link
    :to="{ name: 'app.products' }"
    class="group relative block w-full sm:w-80 cursor-pointer rounded-lg overflow-hidden"
  >
    <!-- Image with dark overlay effect -->
    <img
      src="@/assets/categories/hydrosla2.png"
      alt="hydrosla2"
      class="w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
    />

    <!-- Dark overlay -->
    <div
      class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Centered Button -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <router-link
        :to="{ name: 'app.products' }"
        class="flex justify-center items-center w-48 bg-[#C70A0C] text-white text-base px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-[#C70A0C] transition-colors duration-300"
      >
        {{$t('aboutUsMainPage.buttons.learnMore')}}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pl-2 h-7"
          viewBox="0 0 640 640"
        >
          <path
            fill="currentColor"
            d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
          />
        </svg>
      </router-link>
    </div>
  </router-link>
</div>
<div class="h-auto md:h-[65vh] flex justify-start items-end px-4 md:px-8">
  <router-link
    :to="{ name: 'app.products' }"
    class="group relative block w-full sm:w-80 cursor-pointer rounded-lg overflow-hidden"
  >
    <!-- Image with dark overlay effect -->
    <img
      src="@/assets/categories/kit.png"
      alt="kit"
      class="w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
    />

    <!-- Dark overlay -->
    <div
      class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Centered Button -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <router-link
        :to="{ name: 'app.products' }"
        class="flex justify-center items-center w-48 bg-[#C70A0C] text-white text-base px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-[#C70A0C] transition-colors duration-300"
      >
        {{$t('aboutUsMainPage.buttons.learnMore')}}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pl-2 h-7"
          viewBox="0 0 640 640"
        >
          <path
            fill="currentColor"
            d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
          />
        </svg>
      </router-link>
    </div>
  </router-link>
</div>
<div class="h-auto md:h-[65vh] flex justify-end items-start px-4 md:px-8">
  <router-link
    :to="{ name: 'app.products' }"
    class="group relative block w-full sm:w-80 cursor-pointer rounded-lg overflow-hidden"
  >
    <!-- Image with dark overlay effect -->
    <img
      src="@/assets/categories/implant.png"
      alt="implant"
      class="w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
    />

    <!-- Dark overlay -->
    <div
      class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Centered Button -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <router-link
        :to="{ name: 'app.products' }"
        class="flex justify-center items-center w-48 bg-[#C70A0C] text-white text-base px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-[#C70A0C] transition-colors duration-300"
      >
        {{$t('aboutUsMainPage.buttons.learnMore')}}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pl-2 h-7"
          viewBox="0 0 640 640"
        >
          <path
            fill="currentColor"
            d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
          />
        </svg>
      </router-link>
    </div>
  </router-link>
</div>
<div class="h-auto md:h-[65vh] flex justify-start items-end px-4 md:px-8">
  <router-link
    :to="{ name: 'app.products' }"
    class="group relative block w-full sm:w-80 cursor-pointer rounded-lg overflow-hidden"
  >
    <!-- Image with dark overlay effect -->
    <img
      src="@/assets/categories/conical.png"
      alt="conical"
      class="w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
    />

    <!-- Dark overlay -->
    <div
      class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <!-- Centered Button -->
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <router-link
        :to="{ name: 'app.products' }"
        class="flex justify-center items-center w-48 bg-[#C70A0C] text-white text-base px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-[#C70A0C] transition-colors duration-300"
      >
        {{$t('aboutUsMainPage.buttons.learnMore')}}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pl-2 h-7"
          viewBox="0 0 640 640"
        >
          <path
            fill="currentColor"
            d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
          />
        </svg>
      </router-link>
    </div>
  </router-link>
</div>

    </div>
  </div>
</template>

<style scoped></style>
