<template>
    <div class="card flex justify-content-center">
        <Button label="Cadastro" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Cadastrar" :style="{ width: '25rem' }">
            <span class="p-text-secondary block mb-5">Preencha os campos em branco.</span>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="nome" class="font-semibold w-6rem">Nome</label>
                <InputText id="nome" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="email" class="font-semibold w-6rem">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="cpf" class="font-semibold w-6rem">CPF</label>
                <InputText id="cpf" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancelar" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Salvar" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>