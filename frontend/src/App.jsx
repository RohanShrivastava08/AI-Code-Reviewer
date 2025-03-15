import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
      {/* Animated Header */}
      <motion.header
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🚀 AI Code Reviewer
      </motion.header>

      <main>
        {/* Left - Code Input Box */}
        <div className="left">
          <h2>💻 Code Input</h2>
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              className="code-editor"
            />
          </div>
          <motion.div
            onClick={reviewCode}
            className="review"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔍 Review Code
          </motion.div>
        </div>

        {/* Right - Code Review Output */}
        <div className="right">
          <h2>✅ Code Reviewed</h2>
          <div className="output">
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>
          Made with ❤️ by <strong>Rohan Shrivastava</strong> | AI Code Reviewer 🚀
        </p>
        <div className="footer-icons">
          <a href="https://github.com/RohanShrivastava08" target="_blank" rel="noopener noreferrer">🌐 GitHub</a>
          <a href="https://www.linkedin.com/in/rohan-shrivastava-887a15251/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          <a href="mailto:rohansh0808@gmail.com">📧 Contact</a>
        </div>
      </footer>
    </>
  );
}

export default App;
