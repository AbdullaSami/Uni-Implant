<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import NavBar from './NavBar.vue'
import Footer from "./Footer.vue"


</script>

<template>
  <div>
    <NavBar />
    <div>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <Footer />
    </div>
</template>