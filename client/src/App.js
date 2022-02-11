import logo from './logo.svg';
import './App.css';
import ArticleInfo from './ArticleInfo';
import testdata from './testdata';

function App() {
  return (
    <div>
      {testdata.map( (x) => {if (x.title !== ""){return ArticleInfo(x.title, x.text, x.picture);}})}
    </div>
  )

}

export default App;
