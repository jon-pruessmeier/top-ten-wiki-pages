import logo from './logo.svg';
import './App.css';
import ArticleInfo from './ArticleInfo';
import testdata from './testdata';

console.log(testdata);

function App() {

  function listOfArticles(data){
    let list = [];
    for (let i = 0; i < data.length; i++){
      const elem = data[i];
      console.log(elem);
      console.log('-----ITERATION---------')
      if (elem.title !== ""){
        const article = ArticleInfo(elem.title, elem.text, elem.picture);
        console.log(article);
        list.push(article);
       
      }
      console.log('---------------')
    }
    return list;
  }

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
    return result;
  }

  const hello = loadArticles();
  console.log('---------');
  console.log(hello);
  console.log('---------');
  const listArticles = listOfArticles(hello);




  const app = (
    <div>
      <h1>Articles:</h1>
      {listArticles}
    </div>
  );

  return app;

}

export default App;
