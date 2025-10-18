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
        class="flex items-center"
      >
        <img
          src="@/assets/logo.png"
          :class="[
            'transition-all duration-500 h-10',
            isScrolled ? 'hidden' : 'block',
          ]"
          alt="Logo"
        />
        <img
          src="@/assets/logo-white.png"
          :class="[
            'transition-all duration-500 h-10',
            isScrolled ? 'block' : 'hidden',
          ]"
          alt="Logo"
        />
      </router-link>
      <div class="flex md:order-2 space-x-3 md:space-x-0">
        <select
          v-model="locale"
          class="text-white bg-transparent hover:bg-white hover:text-zinc-900 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-2xl border hover:ring-3 hover:ring-salt-200 transition-colors duration-300 text-sm px-4 py-2 text-center md:w-44"
        >
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          @click="isMobileMenuOpen = true"
          :aria-expanded="isMobileMenuOpen ? 'true' : 'false'"
        >
          <span class="sr-only">{{ $t("navbar.srOpenMenu") }}</span>
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
              {{ $t("navbar.links.home") }}
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'app.about', hash: '#main' }"
              class="block py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              {{ $t("navbar.links.about") }}
            </router-link>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              {{ $t("navbar.links.products") }}
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
                    {{ $t("navbar.products.implants.title") }}
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
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
                  <div
                    id="submenuImplants"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-48 dark:bg-gray-700"
                  >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <router-link
                          :to="{ name: 'app.products' }"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{
                            $t("navbar.products.implants.items.uni-implants")
                          }}</router-link
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.implants.items.uniconic") }}</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.implants.items.uniplus") }}</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.implants.items.unipiece") }}</a
                        >
                      </li>
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
                    {{ $t("navbar.products.prosthetic.title") }}
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
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
                  <div
                    id="submenuProsthetic"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700"
                  >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.prosthetic.items.cementable") }}</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.prosthetic.items.overdenture") }}</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.prosthetic.items.multiunit") }}</a
                        >
                      </li>
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
                    {{ $t("navbar.products.digital.title") }}
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
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
                  <div
                    id="submenuDigital"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700"
                  >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.digital.items.tibase") }}</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >{{ $t("navbar.products.digital.items.multiunit_tibase") }}</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- Kits -->
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >{{ $t("navbar.links.kits") }}</a
                  >
                </li>
              </ul>
            </div>
          </li>

          <li>
            <router-link
              :to="{ name: 'app.download', hash: '#main' }"
              class="block py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              {{ $t("navbar.links.downloads") }}
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'app.contact-us', hash: '#main' }"
              class="block py-2 px-3 md:text-zinc-200 md:hover:text-white transition-colors duration-300 rounded-sm hover:bg-slate-400 md:hover:bg-transparent md:p-0"
            >
              {{ $t("navbar.links.contact") }}
            </router-link>
          </li>
        </ul>
      </div>

      <transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 z-30 md:hidden"
          @click.self="closeMobileMenu"
        >
          <div class="absolute inset-0 bg-black/50" />
          <transition name="slide">
            <div
              class="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white dark:bg-gray-800 shadow-xl overflow-y-auto"
            >
              <div
                class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
              >
                <router-link
                  :to="{ name: 'app.home', hash: '#main' }"
                  class="flex items-center space-x-3"
                  @click="closeMobileMenu"
                >
                  <img src="@/assets/logo.png" class="h-8" alt="Logo" />
                </router-link>
                <button
                  type="button"
                  class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  @click="closeMobileMenu"
                >
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav class="px-2 py-2">
                <ul class="space-y-1">
                  <li>
                    <router-link
                      :to="{ name: 'app.home', hash: '#main' }"
                      class="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      @click="closeMobileMenu"
                    >
                      {{ $t("navbar.links.home") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'app.about', hash: '#main' }"
                      class="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      @click="closeMobileMenu"
                    >
                      {{ $t("navbar.links.about") }}
                    </router-link>
                  </li>

                  <li>
                    <button
                      type="button"
                      class="w-full flex items-center justify-between px-3 py-2 rounded-md text-left text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      @click="mobileOpen.products = !mobileOpen.products"
                    >
                      <span>{{ $t("navbar.links.products") }}</span>
                      <svg
                        :class="[
                          'w-4 h-4 transition-transform',
                          mobileOpen.products ? 'rotate-180' : 'rotate-0',
                        ]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <transition name="accordion">
                      <div v-show="mobileOpen.products" class="pl-2">
                        <ul class="space-y-1">
                          <li>
                            <button
                              type="button"
                              class="w-full flex items-center justify-between px-3 py-2 rounded-md text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              @click="mobileOpen.implants = !mobileOpen.implants"
                            >
                              <span>{{ $t("navbar.products.implants.title") }}</span>
                              <svg
                                :class="[
                                  'w-4 h-4 transition-transform',
                                  mobileOpen.implants ? 'rotate-180' : 'rotate-0',
                                ]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            <transition name="accordion">
                              <div v-show="mobileOpen.implants" class="pl-4">
                                <ul class="space-y-1 text-sm">
                                  <li>
                                    <router-link
                                      :to="{ name: 'app.products' }"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                    >
                                      {{
                                        $t("navbar.products.implants.items.uni-implants")
                                      }}
                                    </router-link>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{
                                        $t("navbar.products.implants.items.uniconic")
                                      }}</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{
                                        $t("navbar.products.implants.items.uniplus")
                                      }}</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{
                                        $t("navbar.products.implants.items.unipiece")
                                      }}</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </transition>
                          </li>

                          <li>
                            <button
                              type="button"
                              class="w-full flex items-center justify-between px-3 py-2 rounded-md text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              @click="mobileOpen.prosthetic = !mobileOpen.prosthetic"
                            >
                              <span>{{ $t("navbar.products.prosthetic.title") }}</span>
                              <svg
                                :class="[
                                  'w-4 h-4 transition-transform',
                                  mobileOpen.prosthetic ? 'rotate-180' : 'rotate-0',
                                ]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            <transition name="accordion">
                              <div v-show="mobileOpen.prosthetic" class="pl-4">
                                <ul class="space-y-1 text-sm">
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{
                                        $t("navbar.products.prosthetic.items.cementable")
                                      }}</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{
                                        $t("navbar.products.prosthetic.items.overdenture")
                                      }}</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{
                                        $t("navbar.products.prosthetic.items.multiunit")
                                      }}</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </transition>
                          </li>

                          <li>
                            <button
                              type="button"
                              class="w-full flex items-center justify-between px-3 py-2 rounded-md text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              @click="mobileOpen.digital = !mobileOpen.digital"
                            >
                              <span>{{ $t("navbar.products.digital.title") }}</span>
                              <svg
                                :class="[
                                  'w-4 h-4 transition-transform',
                                  mobileOpen.digital ? 'rotate-180' : 'rotate-0',
                                ]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                            <transition name="accordion">
                              <div v-show="mobileOpen.digital" class="pl-4">
                                <ul class="space-y-1 text-sm">
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{ $t("navbar.products.digital.items.tibase") }}</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                                      @click="closeMobileMenu"
                                      >{{
                                        $t(
                                          "navbar.products.digital.items.multiunit_tibase"
                                        )
                                      }}</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </transition>
                          </li>

                          <li>
                            <a
                              href="#"
                              class="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              @click="closeMobileMenu"
                              >{{ $t("navbar.links.kits") }}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </transition>
                  </li>

                  <li>
                    <router-link
                      :to="{ name: 'app.download', hash: '#main' }"
                      class="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      @click="closeMobileMenu"
                    >
                      {{ $t("navbar.links.downloads") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'app.contact-us', hash: '#main' }"
                      class="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      @click="closeMobileMenu"
                    >
                      {{ $t("navbar.links.contact") }}
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const isScrolled = ref(false);
const { locale } = useI18n();

const isMobileMenuOpen = ref(false);
const mobileOpen = ref({
  products: false,
  implants: false,
  prosthetic: false,
  digital: false,
});

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  mobileOpen.value.products = false;
  mobileOpen.value.implants = false;
  mobileOpen.value.prosthetic = false;
  mobileOpen.value.digital = false;
};

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.2s ease, opacity 0.2s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  height: 0;
  opacity: 0;
}
</style>
