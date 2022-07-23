import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [quote, setQuote] = useState({});

  const get_random_quote = async () => {
    await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get_random_quote();
  }, []);

  return (
    <div className="App">
      <motion.div
        key={quote._id}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{quote.content}</h1>
        <p>{quote.author}</p>
        <p>
          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
              quote.content + " " + quote.author
            )}`}
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
        <div className="card">
          <button onClick={() => get_random_quote()}>New Quote</button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
