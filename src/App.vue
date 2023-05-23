<script setup>
  import {RouterView} from "vue-router"
</script>

<template>
  <div>
    <div class="container">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>