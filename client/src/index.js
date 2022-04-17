import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const info = (
  <div className='container-fluid justify-content-center'>
    <div className='row justify-content-center'>
      <div className='col-10 justify-content-center text-center'>
          <h1>Wikipedia-Scraper Project</h1>
          <p>
          This project uses a crawler for the German Wikipedia and shows the corresponding results. 
          The crawler starts at the "article of the day" and then calls another Wikipedia article from there. 
          The crawler calls up to 10 different articles, unless an error appears (e.g. if an article has a different HTML structure). 
          In case of an error, the number of articles is limited.
          The results are then provided by a server, which was created using the Express framework
          and the frontend you see is implemented via React and Bootstrap.
          In order to crawl the pages from Wikipedia, the server uses a Python-Script which uses the Selenium-Framework.
          </p>
        </div>
    </div>
  </div>
  
);

ReactDOM.render(
<React.StrictMode>
  {info}
  <App />
</React.StrictMode>,
document.getElementById('root')
);

