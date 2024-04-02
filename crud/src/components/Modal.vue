<template>
    <Dialog :visible="true" @hide="close" @update:visible="close" modal header="Cadastre aqui" :style="{ width: '25rem' }">
        <span class="p-text-secondary block mb-5">Informe abaixo as informações do usuário</span>
        
        <div class="flex align-items-center gap-3 mb-3">
            <label for="nome" class="font-semibold w-6rem">Nome:</label>
            <InputText id="nome" class="flex-auto" autocomplete="off" v-model="newPerson.name" />
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="email" class="font-semibold w-6rem">Email:</label>
            <InputText id="email" class="flex-auto" autocomplete="off" v-model="newPerson.email"/>
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="cpf" class="font-semibold w-6rem">CPF:</label>
            <InputNumber id="cpf" class="flex-auto" autocomplete="off" v-model="newPerson.cpf"/>
        </div>
        <div class="flex align-items-center gap-3 mb-5">
            <label for="age" class="font-semibold w-6rem">Idade:</label>
            <InputNumber id="age" class="flex-auto" autocomplete="off" v-model="newPerson.age"/>
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Cancelar" severity="secondary" @click="close"></Button>
            <Button type="submit" label="Salvar" @click="savePerson"></Button>
        </div>
    </Dialog>
</template>

<script setup>
import { ref } from "vue";

const newPerson = ref({ name: '', email: '', age: null, cpf: null });

const emit = defineEmits(['update:modelValue', 'adicionar']); // Corrigindo a definição de emit

const close = () => {
    emit('update:modelValue', false)
    console.log('fechou')
}

const savePerson = () => {
    emit ('adicionar', newPerson.value)
    close()
}
</script>
