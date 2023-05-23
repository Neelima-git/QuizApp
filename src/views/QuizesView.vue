<script setup>
import { ref, watch } from "vue";

import quizData from "../data/quizes.json";
import Card from "../components/Card.vue";

const quizzes = ref(quizData);// Reactive variable holding quiz data
const searchQuery = ref(""); // Reactive variable for search input

watch(searchQuery, () => {
  // Watch for changes in the search variable
  quizzes.value = quizData.filter(quiz => quiz.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
   // Filter the quizData based on the search value and update the quizes variable

});
</script>

<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="searchQuery" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>
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
</style>
