<template>
    

    <button @click="close">Clique</button>
    <button @click="deletePerson">Deletar</button>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits (['customEvent', 'deletar']);

const close = () => {
    emit('customEvent')
    console.log('fechou')
}

const deletePerson = () => {
    emit ('deletar')
    console.log('deletou')
}

const props = defineProps(['teste', 'name']);

console.log(props.name);
console.log(props.teste)

</script>