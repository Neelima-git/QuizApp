import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue"; // Import the QuizesView component
import QuizView from "../views/QuizView.vue"; // Import the QuizView component

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Set up HTML5 history mode for clean URLs
  routes: [
    {
      path: "/",
      name: 'quizes',
      component: QuizesView // Map the root path to the QuizesView component
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView // Map the "/quiz/:id" path to the QuizView component
    }
  ]
});

export default router; // Export the router instance
