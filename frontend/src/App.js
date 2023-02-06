import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error))

  }, [])

  return (
    <div className="App">
      <h1>Flask and React App</h1>

      <ArticleList articles={articles} />

    </div>
  );
}

export default App;
