<template>
    <div class="meio">
      <h1>Lista de Tarefas</h1>
      <form @submit.prevent="addTask">
        <input type="text" v-model.trim="newTask" placeholder="Adicionar nova tarefa" required>
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.completed" id="task-{{index}}">
          <label :for="'task-' + index">{{ task.text }}</label>
          <button @click="removeTask(index)">Remover</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: []
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  };
  </script>
 <style>
    body{
        background-image: linear-gradient(to right, rgb(92, 0, 92), rgb(0, 0, 129));
    }
    .meio{
        background-image: linear-gradient(to right, rgb(0, 0, 129), rgb(92, 0, 92));
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        margin-top: 50px;
        height: 500px;
        width: 500px;
        color: white;
        display: inline-block;
        border-radius: 10px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.274);
    }

    h1 {
    font-size: 24px;
    margin-bottom: 20px;
    }

    form {
    display: flex;
    margin-bottom: 20px;
    }

    input[type="text"] {
    flex: 1;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    }

    button[type="submit"] {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

    ul {
    list-style-type: none;
    padding: 0;
    }

    li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    }

    input[type="checkbox"] {
    margin-right: 10px;
    }

    label {
    font-size: 16px;
    flex: 1;
    }

    button {
    padding: 4px 8px;
    font-size: 14px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }
</style>  