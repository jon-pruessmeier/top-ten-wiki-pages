import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const info = (
  <div>
    <h1>Wikipedia-Scraper Project</h1>
    <p>
    This project uses a crawler for the German Wikipedia and shows the corresponding results. 
    The crawler starts at the "article of the day" and then calls another Wikipedia article from there. 
    The crawler calls up to 10 different articles, unless an error appears (e.g. if an article has a different HTML structure). 
    The results are then provided by a server, which was created using the Express framework. 
    The page that now displays the results was implemented using React. 
    The script for the crawler was created using Python and the Selenium framework.
    </p>
  </div>
);

ReactDOM.render(
<React.StrictMode>
  {info}
  <App />
</React.StrictMode>,
document.getElementById('root')
);

