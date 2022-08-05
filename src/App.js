import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const response = await fetch("https://hn.algolia.com/api/v1/items");
    const data = await response.json();

    setArticles(data.results);
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
          <li className="article" key={article.id.value + index}></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
