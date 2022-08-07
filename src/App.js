import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const response = await fetch(
      "https://hn.algolia.com/api/v1/search?query=..."
    );
    const data = await response.json();

    setArticles(data.hits);
  }

  useEffect(() => {
    console.log("Mounted");
    getArticles();
  }, []);

  useEffect(() => {
    console.log("updated");
    console.log(articles);
  }, [articles]);

  // const handleClick = () => {
  //   console.log("Clicked");
  //   setIsHidden(!isHidden);
  // };

  return (
    <div className="App">
      <ul>
        {articles.map((article, index) => (
          <li className="article" key={index}>
            {article.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
