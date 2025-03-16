#  🚀 AI Code Reviewer using Node.js, Express.js & Google Gemini AI


![Screenshot (1162)](https://github.com/user-attachments/assets/24d19140-0476-4303-bf83-6bf7a1db1165)

![Screenshot (1160)](https://github.com/user-attachments/assets/6bdd869d-7905-4af5-a01b-64b45ad77bb8)


- Welcome to my AI Code Reviewer project! 🤖✨

- This project demonstrates how to build an AI-powered code reviewing tool using Node.js, Express.js, Google Gemini AI, Framer Motion, PrismJS, and more.

- It provides an intuitive frontend for pasting code and reviewing it efficiently, while the backend handles AI-powered code analysis and improvements.

## 📋 Table of Contents
- Introduction
- Features
- Project Implementation Process
- File Structure
- Technology Stack
- Installation
- Usage
- Screenshots
- Contributing
- License
- Contact

## 📘 Introduction

- The AI Code Reviewer project is designed to help developers analyze and improve their code using AI-powered suggestions.

- It integrates Google Gemini AI to provide insightful feedback on code quality, best practices, and potential optimizations.

- The frontend, built with Vite, offers a smooth user experience with syntax highlighting using PrismJS and interactive animations via Framer Motion.

## ✨ Features

🤖 AI-Powered Code Review: Get instant AI-generated feedback on your code.

⚡ Node.js & Express.js Backend: Efficient and scalable API setup.

🔄 Google Gemini AI Integration: Uses AI to analyze and improve code quality.

🎨 Modern UI with Vite & Tailwind CSS: Fast, lightweight frontend setup with an elegant UI.

💡 Syntax Highlighting with PrismJS: Improves code readability.

📡 REST API Endpoints: Structured API for seamless backend communication.

🌐 CORS & Axios Support: Secure and efficient data handling between frontend and backend.



## 🛠 Project Implementation Process

#### 1. Project Setup
- Initialized a Node.js backend with Express.js.
- Set up Google Gemini AI API integration.
- Built a Vite-based React frontend for code input and AI-powered reviews.

#### 2. API Endpoints & AI Integration
- Created REST API routes for submitting code and receiving AI-generated feedback.
- Integrated Google Gemini AI for intelligent code analysis.


#### 3. Frontend & UI Enhancements
- Designed a clean UI using Tailwind CSS & Framer Motion for animations.
- Added PrismJS for syntax highlighting.



## 📁 File Structure

```bash
ai-code-reviewer/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── app.js
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── vite.config.js
├── package.json
├── README.md
```

## 💻 Technology Stack

### Backend:
- Node.js: JavaScript runtime for backend development.
- Express.js: Fast and minimalist web framework for Node.js.
- Google Gemini AI: AI-powered code analysis.
- CORS: Middleware for handling cross-origin requests.
- Axios: Simplified HTTP requests for API calls.
- Nodemon: Auto-restart server during development.

### Frontend:
- React.js (Vite): Modern frontend framework for fast UI development.
- Framer Motion: Smooth animations and UI interactions.
- PrismJS: Beautiful syntax highlighting for code.
- Tailwind CSS: Utility-first styling framework.


## 🛠 Installation

Follow these steps to set up and run the Job Findr project locally:

#### 1. Clone the repository
```bash
git clone https://github.com/YourUsername/ai-code-reviewer.git
cd ai-code-reviewer
```

#### 2. Install backend dependencies

```bash
cd backend
npm install
```

#### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

#### 4. Run the backend

```bash
npx nodemon server.js
```

#### 5. Run the frontend

```bash
npm run dev
```

## 🚀 Usage
- Start the backend server using npx nodemon server.js.
- Run the frontend using npm run dev.
- Open the web app and paste your code in the editor.
- Click the Review button to get AI-powered feedback and suggestions.


## 📡 API Endpoints

### 🔹 GET Request

```bash
POST /api/review
```

#### Request Body

```bash
{
  "code": "function add(a, b) { return a + b; }"
}
```

#### Response:
```bash
{
  "message": "AI Review Successful!",
  "review": "Consider adding type checks to handle unexpected inputs."
}
```

## 📸 Screenshots

![Screenshot (1163)](https://github.com/user-attachments/assets/6269439f-2fd9-4d5b-9376-e68c001e0851)

![Screenshot (1167)](https://github.com/user-attachments/assets/07199f46-3947-4ee6-92fc-02a3c2e7dfa3)

![Screenshot (1166)](https://github.com/user-attachments/assets/1ebeb787-b812-4566-adfe-b342f03c5fa1)

![Screenshot (1165)](https://github.com/user-attachments/assets/1c5911a3-fe45-457d-8ab5-1934daa9e6a4)

![Screenshot (1164)](https://github.com/user-attachments/assets/dd8e9a58-43dc-4b21-b443-1183dd0a0d48)

## 🤝 Contributing
We welcome community contributions! Follow the steps below to contribute:

#### Fork the repository
- Create a new branch:
```bash
git checkout -b feature/YourFeature
```

- Commit your changes:
```bash
git commit -m 'Add your feature'
```

- Push to the branch:
```bash
git push origin feature/YourFeature
```

- Open a pull request with detailed explanations of your changes.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact
For any questions or suggestions, feel free to reach out:

- Email: rohansh0808@gmail.com
- GitHub: Rohansh0808
