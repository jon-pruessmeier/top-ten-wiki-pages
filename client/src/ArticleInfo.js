import React from 'react';

function ArticleInfo(title, text="", link="", imgSource=""){
    return (
        
            <div className="card">

            <img className="card-img-top" src={imgSource}/>

            <div className="card-body">
                <h5 className="title">{title}</h5>
                <p className="card-text">{text}</p>
                <a className="btn btn-primary" href={link}>Hier geht es zum Artikel!</a>
            </div>
        </div>
        
    
            
    )
}
export default ArticleInfo;