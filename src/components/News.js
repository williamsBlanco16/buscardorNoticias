import React from 'react';
import PropTypes from 'prop-types'

const News = ({articles}) => {
  const {urlToImage, description, title, source, url} = articles
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {
          urlToImage
            ?(<div className="card-image">
              <img src={urlToImage} alt={title}/>
              <span className="card-title">{source.name}</span>
              </div>)
          : null
        }

        <div className="card-content">
          <h3>{title}</h3>
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-ation">
          <a 
            href={url}
            target="_blank"
            rel="nooper noreferrer"
            className="waves-effect waves-light btn">
              Ver noticia completa
            </a>
        </div>
      </div>
    </div>
  );
}

News.propTipes = {
  articles: PropTypes.object.isRequired
}

export default News;
