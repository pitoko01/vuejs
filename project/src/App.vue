<script setup>
import Menu from './components/Menu.vue';
import 'primeicons/primeicons.css'

</script>

<template>
  <header>

    <div class="wrapper">
      <Menu/>
      
      
      
      
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&family=Montserrat:ital,wght@0,500;1,500&display=swap');
header {
  line-height: 1.5;
  max-height: 100vh;
}



</style>
