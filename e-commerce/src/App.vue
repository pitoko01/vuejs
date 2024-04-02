<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Compras from './components/Compras.vue'
import Menu from './components/Menu.vue'
import Side from './components/Side.vue'


</script>

<template>
  <header>
    <div class="wrapper">

      <Side/>
      <Menu/>
      <Compras/>
    </div>
  </header>

  <RouterView />
</template>

<style>
*{
  margin: 0;
}

</style>
