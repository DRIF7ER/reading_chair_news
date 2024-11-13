import './Home.css';
import Card from '../Card/Card.jsx';
import ArticleView from '../ArticleView/ArticleView.jsx';
import FilteredPage from '../FilteredPage/FilteredPage.jsx';
// import { fetchLastThreeMonths } from '../ApiCalls/ApiCalls.js';
import fakeData from '../../fakeNews.js';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export function Home ({reading, data}) {
  const [isReading, setIsReading] = reading;
  console.log('<-- CLICKED WORKED')

  // if (!data) {
  //   // console.log(data.length, '<-- DATA')
  //   return <p>Please wait...</p>
  // } else if (data.length !== 0) {
  //   // console.log(data, '<-- DATA 2')
  //   return (
  //       <div className={'article-list-container'}>
  //         {/* {console.log(data, '<-- DATA IN RETURN')} */}
  //         <div className={'most-recent-article-wrap'} onClick={() => setIsReading(data.articles[0])}>
  //           <div className={'image-box'}>
  //             <img src={`${data.articles[0].urlToImage}`} />
  //           </div>
  //           <div className={'article-content'}>
  //             <div className={'date-published'}><p>{`${dayjs(data.articles[0].publishedAt).format('dddd • MMMM DD, YYYY • h:mm A')}`}</p></div>
  //             <div className={'source-author'}><p>{`${data.articles[0].source.name} • ${data.articles[0].author}`}</p></div>
  //             <div className={'article-title'}><p>{`${data.articles[0].title}`}</p></div>
  //             <div className={'article-description'}><p>{`${data.articles[0].description}`}</p></div>
  //           </div>
  //         </div>
  //         {
  //           data.articles.slice(1).map((article) =>{
  //             if (article.content === '[Removed]') {
  //               // console.log(article.content, '<-- CONTENT?')
  //               return
  //             } else {
  //               return <Card article={article} reading={reading} />
  //             }
  //           })
  //         }
  //       </div>
  //   )
  // }


  if (!fakeData) {
    // console.log(fakeData.length, '<-- DATA')
    return <p>Please wait...</p>
  } else if (fakeData.length !== 0) {
    // console.log(fakeData, '<-- DATA 2')
    return (
        <div className={'article-list-container'}>
          {/* {console.log(fakeData, '<-- DATA IN RETURN')} */}
          <div className={'most-recent-article-wrap'} onClick={() => setIsReading(fakeData.articles[0])}>
            <div className={'image-box'}>
              <img src={`${fakeData.articles[0].urlToImage}`} />
            </div>
            <div className={'article-content'}>
              <div className={'date-published'}><p>{`${dayjs(fakeData.articles[0].publishedAt).format('dddd • MMMM DD, YYYY • h:mm A')}`}</p></div>
              <div className={'source-author'}><p>{`${fakeData.articles[0].source.name} • ${fakeData.articles[0].author}`}</p></div>
              <div className={'article-title'}><p>{`${fakeData.articles[0].title}`}</p></div>
              <div className={'article-description'}><p>{`${fakeData.articles[0].description}`}</p></div>
            </div>
          </div>
          {
            fakeData.articles.slice(1).map((article) =>{
              if (article.content === '[Removed]') {
                // console.log(article.content, '<-- CONTENT?')
                return
              } else {
                return <Card article={article} reading={reading} />
              }
            })
          }
        </div>
    )
  }
}

export default Home;