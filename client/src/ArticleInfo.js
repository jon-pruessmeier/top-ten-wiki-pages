import React from 'react';

function ArticleInfo(title, text="", link=""){
    return (
        <div className="articleInfo">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={link}>Hier geht es zum Artikel!</a>
        </div>
    )
}
export default ArticleInfo;