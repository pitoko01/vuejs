<template>
  <div class="alerta">
    <button v-if="!nomeValidado" @click="pedirNome" class="botao-customizado">Clique Aqui</button>
    <video v-if="nomeValidado" controls class="video-customizado">
      <source src="../images/pexels-kammeran-gonzalezkeola-16937755 (1080p).mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Variável reativa para armazenar o nome inserido pelo usuário
const nome = ref('');
// Variável reativa para indicar se o nome foi validado como "Maria Alice"
const nomeValidado = ref(false);
// Variável reativa para indicar se o botão está piscando
const nomePiscando = ref(true);

// Função para pedir o nome ao usuário
const pedirNome = () => {
  const inputNome = prompt('Por favor, insira seu nome:');
  if (inputNome !== null && inputNome.trim() !== '') {
    validarNome(inputNome.trim());
  } else {
    alert('Por favor, insira um nome válido.');
  }
};

// Função para validar o nome
const validarNome = (inputNome) => {
  if (inputNome === 'Maria Alice') {
    nome.value = inputNome;
    nomeValidado.value = true;
  } else {
    alert('Desculpe, apenas "Maria Alice" é permitido.');
    // Encerra a animação após 1 segundo
    setTimeout(() => {
      nomePiscando.value = false;
    }, 1000);
  }
};
</script>

<style scoped>
.alerta {
  height: 100vh; /* Define a altura da div para 100% da altura da janela de visualização */
  display: flex; /* Usa flexbox para centralizar o conteúdo verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
}

.botao-customizado {
  background-color: #77ffc0;
  color: #201b2c;
  height: 300px;
  width: 300px;
  font-size: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: auto;
  animation: piscar 0.8s infinite; /* Aplica a animação de piscar */
}

.botao-customizado:hover {
  background-color: purple;
  color: #77ffc0;
}

.video-customizado {
  max-width: 80%; /* Define a largura máxima do vídeo */
  max-height: 80%; /* Define a altura máxima do vídeo */
}

/* Animação de piscar */
@keyframes piscar {
  0% { background-color: #77ffc0; }
  50% { background-color: purple; }
  100% { background-color: #77ffc0; }
}
</style>
