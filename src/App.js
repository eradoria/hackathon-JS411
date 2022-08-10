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
      <header>
        Search Hacker News
        <input placeholder="Search stories by title, url or author"></input>
      </header>
      <ul>
        {articles.map((article, index) => (
          <articles className="stories">
            <div className="story-container">
              <div className="story-title">
                <span>{article.title}</span>
                <a>{article.url}</a>
              </div>
              <div className="story-data">
                <span>{article.points}</span>
                <span>{article.author}</span>
                <span>{article.num_comments}</span>
                <span>{article.created_at}</span>
              </div>
            </div>
          </articles>
        ))}
      </ul>
    </div>
  );
}

export default App;
