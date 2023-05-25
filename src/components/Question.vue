<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(["question"]); // Define the props expected by the component
const emit = defineEmits(["selectOption"]); // Define the emitted event

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect); // Emit the "selectOption" event with the selected option
};
</script>

<template>
  <div class="question-container">
    <h1 class="question">{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div v-for="option in question.options" :key="option.id" @click="emitSelectedOption(option.isCorrect)" class="option">
      <div class="option-label">{{ option.label }}</div>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.question-container {
  margin-top: 20px;

  .question {
    font-size: 40px;
    margin-bottom: 20px;
  }
}

.options-container {
  .option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;

    .option-label {
      background-color: bisque;
      width: 50px;
      height: 50px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .option-value {
      background-color: rgb(244, 239, 239);
      width: 50%;
      height: 50px;
      font-size: 30px;
      padding: 0 20px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
