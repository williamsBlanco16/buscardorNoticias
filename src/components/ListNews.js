import React from 'react';
import News from './News'
import PropTypes from 'prop-types';

const ListNews = ({news=[]}) => {
  return (
    <div className="row">
      {
        news.map((n,i) => (
          <News key={i} articles ={n} />
        ))
      }
    </div>
  );
}

ListNews.proptypes = {
  news: PropTypes.array.isRequired
}

export default ListNews;
