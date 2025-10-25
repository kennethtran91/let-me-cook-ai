
# Let Me Cook 🧑‍🍳

**Let Me Cook** is an intelligent web application designed to combat food waste and culinary indecision. It helps you discover delicious meals you can cook with the ingredients you already have, turning your leftover food into delightful dishes.

![UI](https://i.imgur.com/n1DiiOY.png)

## The Problem: "What Can I Make?" 🤔

We've all been there: staring into a fridge filled with a random assortment of ingredients, wondering, "What can I possibly cook with this?" This common dilemma often leads to:

-   **Food Waste:** Perfectly good ingredients are thrown away because we lack inspiration or a specific recipe.
-   **Unnecessary Spending:** We default to ordering takeout or buying more groceries when we could have used what we already have.
-   **Decision Fatigue:** The mental effort of planning a meal with limited options can be surprisingly draining.

Let Me Cook AI tackles this problem head-on by providing an instant, creative, and practical solution.

## The Solution: AI-Powered Recipe Suggestions 🤖

This application leverages the power of the Google Gemini API to act as your personal AI chef. Simply:

1.  **List Your Ingredients:** Enter the items you have on hand.
2.  **Specify a Cuisine (Optional):** If you're in the mood for something specific, like Italian or Asian, let the AI know.
3.  **Get Instant Recipes:** The app generates three distinct and creative recipe ideas, complete with a name, an enticing description, a list of ingredients with quantities, and clear, step-by-step instructions.

By bridging the gap between your ingredients and a finished meal, Let Me Cook AI helps you save money, reduce waste, and explore new culinary possibilities.

## ✨ Features & Skills Showcase

This project is a demonstration of modern web development practices and AI integration.

-   **Intuitive UI:** A clean, responsive, and user-friendly interface built with **Angular** and styled with **Tailwind CSS**.
-   **AI Integration:** Utilizes the **Google Gemini API** for dynamic content generation, showcasing skills in prompt engineering and handling structured JSON responses from a large language model.
-   **Type Safety:** Written in **TypeScript** to ensure robust, maintainable, and error-free code.
-   **Component-Based Architecture:** A well-organized codebase with reusable components for UI elements like recipe cards and loading spinners.
-   **Asynchronous Operations:** Demonstrates proper handling of API requests, including loading and error states for a smooth user experience.

### Tech Stack

-   **Frontend:** Angular, TypeScript, Tailwind CSS
-   **AI:** Google Gemini API (`@google/genai`)

## 🚀 How to Build and Run Locally

Follow these steps to get the project running on your local machine.

### Prerequisites

-   Node.js and npm (or a compatible package manager).
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Step 1: Clone the Repository

Clone this project to your local machine.

```bash
git clone <repository-url>
cd <project-directory>
```

### Step 2: Install Dependencies

While this project uses CDN-hosted dependencies for simplicity in this environment, a typical local setup would involve installing them via npm.

```bash
# In a standard Angular project, you would run:
npm install
```

### Step 3: Set Up Environment Variables

The application requires your Google Gemini API key to function. This key is loaded from an environment variable.

1.  Create a file named `.env` in the root of your project directory.
2.  Add your API key to the `.env` file in the following format:

    ```
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

    Replace `YOUR_GEMINI_API_KEY` with your actual key.

### Step 4: Run the Development Server

To view the application, you need to serve the `index.html` file. You can use a simple tool like `live-server` or the built-in server in your code editor (like VS Code's Live Server extension).

Because the project is set up with ES modules and a development server is assumed to handle environment variables, you would typically run a command like:

```bash
npm run start
```

The browser will open, and you'll be able to interact with the Let Me Cook application!

![result](https://i.imgur.com/hTUJLpr.png)