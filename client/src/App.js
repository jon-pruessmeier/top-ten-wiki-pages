import logo from './logo.svg';
import './App.css';
import ArticleInfo from './ArticleInfo';
import testdata from './testdata';
import { useEffect, useState } from 'react';

function App() {

  const [articles, setArticles] = useState([]);

  function listOfArticles(data){
    let list = [];
    for (let i = 0; i < data.length; i++){
      const elem = data[i];
      if (elem.title !== ""){
        const article = ArticleInfo(elem.title, elem['p-text'], elem.link, elem.img);
        list.push(article);
      }
    }

    return list;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const loadArticles = async () => {
      const url = "/api/wikipages/articles";
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setArticles(result);
    }
    loadArticles().catch((err) => {
      console.log(err);
    })
  });

  useEffect(() => {
    listOfArticles(articles);
  })

  
  

  const app = (
    <div className="container-fluid">
      <div className="row mx-0">
        {listOfArticles(articles)}
      </div>
        
    </div>
  );

  return app;

}

export default App;
