import React from 'react';
import "./ArticleInfo.css"

function ArticleInfo(title, text="", link=""){
    return (
        <div className="ArticleInfo">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link}>Hier geht es zum Artikel!</a>
        </div>
    )
}
export default ArticleInfo;