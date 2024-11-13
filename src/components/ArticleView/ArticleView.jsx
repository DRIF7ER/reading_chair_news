import './ArticleView.css';
import dayjs from 'dayjs';

export function ArticleView ({isReading}) {
  console.log(isReading, '<-- clicked worked')
  console.log('<-- CLICK WORKED')
  return (
    <div className={'single-article-view'}>
      <div className={'top-of-article'}>
        <h1 className={'single-view-article-title'}>{`${isReading.title}`}</h1>
        <div className={'author-and-date'}>
          <p className={'author'}>{`BY: ${isReading.author}`}</p>
          <p className={'date'}>{`${dayjs(isReading.publishedAt).format('dddd • MMMM DD, YYYY • h:mm A')}`}</p>
        </div>
        <img className={'single-view-article-img'} src={isReading.urlToImage} />
      </div>
      <div className={'article-actual'}>{`${isReading.content}`}</div>
    </div>
  )
}

export default ArticleView;