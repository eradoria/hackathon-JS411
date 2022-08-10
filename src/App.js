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
        <span className="Title">Search Hacker News</span>
        <input placeholder="Search stories by title, url or author"></input>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        <span className="settingsSpan">Settings</span>
        
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

