<script setup>
import { ref, watch } from "vue"; //Watch is used to listen to an event, just like an event listener in JavaScript

import quizData from "./data/quizes.json";
import Card from "./components/Card.vue";

const quizes = ref(quizData);
const search = ref("");

watch(search, () => {
  quizes.value = quizData.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizs</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
      <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="Maths Quiz" />
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
header {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
header h1 {
  font-weight: bold;
  margin-right: 30px;
}
header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

/* CARD */

</style>
