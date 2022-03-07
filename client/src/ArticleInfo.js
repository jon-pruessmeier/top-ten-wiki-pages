import React from 'react';

function ArticleInfo(title, text="", link="", imgSource=""){
    return (
        
        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 my-3'>

            <div className="box h-100 bg-primary d-flex p-4 flex-column text-white align-items-center ">

                <img src={imgSource} className="img-thumbnail" width="250" height="250"/>
                <h3 className='mt-3'>{title}</h3>
                <p>{text}</p>
                <a className="btn btn-dark" href={link}>Hier geht es zum Artikel!</a>

            </div>

        </div>
        
    
            
    )
}
export default ArticleInfo;