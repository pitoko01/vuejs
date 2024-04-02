<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Cadastro</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav{
    display: flex;
    justify-content: space-around;
  }
</style>