# React Quiz App

This is a simple interactive quiz application built with React. It features timed questions, answer feedback, and a summary screen upon completion.

## Features

- Multiple-choice questions
- Timed answers with a progress bar
- Immediate feedback on answer correctness
- Quiz completion summary

## Project Structure

```
├── public/
│   └── quiz-logo.png
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── questions.js
│   ├── assets/
│   │   ├── quiz-complete.png
│   │   └── quiz-logo.png
│   └── components/
│       ├── Answers.jsx
│       ├── Header.jsx
│       ├── Question.jsx
│       ├── QuestionTimer.jsx
│       └── Quiz.jsx
│       └── Stat.jsx
│       └── Summary.jsx
├── index.html
├── package.json
├── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd 09-reactQuizApp
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173).

## Build for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

## License

This project is for educational purposes.
