import logo from './logo.svg';
import './App.css';
import ArticleInfo from './ArticleInfo';
import testdata from './testdata';

async function loadArticles(){
  const url = "/article";
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (data){
    return data;
  } else {
    return testdata;
  }
}

const data = loadArticles();
console.log(typeof data);

function App() {

  return (
    <div>
      {data.map( (x) => {if (x.title !== ""){return ArticleInfo(x.title, x.text, x.picture);}})}
    </div>
  )

}

export default App;
