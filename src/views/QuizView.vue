<script setup>
import Question from "../components/Question.vue"
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue"
import { useRoute } from "vue-router"
import { ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute(); // Access the current route object

const quizId = parseInt(route.params.id); // Extract the quiz ID from route parameters
const quiz = quizes.find(q => q.id === quizId) // Find the quiz object from the quizes data based on the ID
const currentQuestionIndex = ref(0); // Reactive variable to keep track of the current question index
const numberOfCorrectAnswers = ref(0); // Reactive variable to store the number of correct answers
const showResults = ref(false); // Reactive variable to control the visibility of the quiz results

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`);
// Computed property to generate the question status string (e.g., "1/10")

const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`);
// Computed property to calculate the progress bar percentage based on the current question index

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }
    if (quiz.questions.length - 1 === currentQuestionIndex.value) {
        showResults.value = true;
    }
    currentQuestionIndex.value++;
}
// Function to handle option selection. It updates the number of correct answers, checks if the quiz is complete, and advances to the next question.
</script>

<template>
    <div>
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage " />
        <div>
            <Question v-if="!showResults" :question="quiz.questions[currentQuestionIndex]" @selectOption="onOptionSelected" />
            <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" />
        </div>
    </div>
</template>
