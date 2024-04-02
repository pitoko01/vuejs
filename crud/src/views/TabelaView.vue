
<template>
    <div>
      <Modal v-model="modalAberto" v-if="modalAberto" @adicionar="addPerson" />
      <Button label="Cadastrar" @click="toggleModal" />
      <div class="card p-fluid">
        <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id" @row-edit-save="onRowEditSave"
            :pt="{
                table: { style: 'min-width: 50rem' },
                column: {
                    bodycell: ({ state }) => ({
                        style:  state['d_editing']&&'padding-top: 0.6rem; padding-bottom: 0.6rem'
                    })
                }
            }"
        >
            <Column field="idade" header="Idade" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputNumber v-model="data[field]" />
                </template>
            </Column>
            <Column field="nome" header="Nome" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="email" header="Email" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="cpf" header="CPF" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputNumber v-model="data[field]" />
                </template>
            </Column>
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
            <Column field="delete" style="width: 20%">
                <template #body="{ data, field }">
                    <Button label="Excluir" @click="deleteRow(data)" icon="pi pi-trash" class="p-button-danger" />
                </template>
            </Column>
        </DataTable>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';
import Modal from '@/components/Modal.vue';


const modalAberto = ref(false)
const products = ref([]);
const editingRows = ref([]);


const addPerson = (person) => {
  products.value.push(person);
}


const onRowEditSave = (event) => {
    let { newData, index } = event;
    products.value[index] = newData;
};

const deleteRow = (row) => {
    const index = products.value.indexOf(row);
    if (index !== -1) {
        products.value.splice(index, 1);
    }
};

const toggleModal = () => {
    modalAberto.value = !modalAberto.value
    console.log('abriu')
};

onMounted(() => {
    ProductService.getPeopleMini().then((data) => (products.value = data));
});


</script>

