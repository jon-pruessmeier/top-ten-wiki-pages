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
      console.log(elem.title);
      console.log('-----ITERATION---------')
      if (elem.title !== ""){
        const article = ArticleInfo(elem.title, elem['p-text'], elem.link);
        console.log(article);
        list.push(article);
      }
      console.log('---------------')
    }
    return list;
  }

  /*
  async function loadArticles(){
    const url = "/articles";
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
  */

  document.addEventListener("DOMContentLoaded", () => {
    const loadArticles = async () => {
      const url = "/articles";
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
    <div>
      {listOfArticles(articles)}
    </div>
  );

  return app;

}

export default App;
