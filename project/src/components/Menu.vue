<template>
  <nav>
    <RouterLink to="/inicio" class="nav-link">Início</RouterLink>
    <RouterLink to="/primeira" class="nav-link">Primeira parte</RouterLink>
    <RouterLink to="/segunda" class="nav-link">Segunda parte</RouterLink>
    <RouterLink to="/terceira" class="nav-link">Terceira parte</RouterLink>
    <RouterLink to="/quarta" class="nav-link">Quarta parte</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>

 *{
  padding: 0px;
  margin: 0px;
  
 }

  body{
    background-color: #fffafa;
  }
nav {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #e0ed21;
  font-family: "Montserrat", sans-serif;
  
}

.nav-link {
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
}

.nav-link:hover {
  opacity: 0.8;
  background-color: #a134eb;
  transition: 0.5s;
  color: white;
}
</style>