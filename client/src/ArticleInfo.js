import React from 'react';

function ArticleInfo(title, p, imgLink="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg", link="google.com"){
    return (
        <div className="articleInfo">
            <h3>{title}</h3>
            <p>{p}</p>
            <a href={link}>Hier geht es zum Artikel!</a>
        </div>
    )
}
export default ArticleInfo;