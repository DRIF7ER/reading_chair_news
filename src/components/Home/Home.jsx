import './Home.css';
import Card from '../Card/Card.jsx';
import data from '../../fakeNews.js';
import useState from 'react';

export function Home () {
  // API Call will go here
  console.log(data, '<-- DATA')

  let mostRecentArticle = data.articles.shift()
  console.log(mostRecentArticle, '<-- MOST RECENT')

  return (
    <div className={'article-list-container'}>
      <div className={'most-recent-article-wrap'}>
        <div className={'image-box'}>
          <img src={`${mostRecentArticle.urlToImage}`} />
        </div>
        <div className={'article-content'}>
          <div className={'date-published'}><p>{`${mostRecentArticle.publishedAt}`}</p></div>
          <div className={'source-author'}><p>{`${mostRecentArticle.source.name} • ${mostRecentArticle.author}`}</p></div>
          <div className={'article-title'}><p>{`${mostRecentArticle.title}`}</p></div>
          <div className={'article-description'}><p>{`${mostRecentArticle.description}`}</p></div>
        </div>
      </div>
      {
        data.articles.map((article) =>{
          return <Card article={article} />
        })
      }
    </div>
  )
}

export default Home;