<template>
  <div class="base-layout">
    <Header />
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>
<script setup>
import Header from "../components/navigations/Header.vue";
</script>