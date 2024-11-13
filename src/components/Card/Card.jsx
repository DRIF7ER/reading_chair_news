import './Card.css';
import readingChairNewsLogo from '../../readingChairNewsLogo.png';
import ArticleView from '../ArticleView/ArticleView';
import dayjs from 'dayjs';

export function Card ({ article, reading }) {
  const [isReading, setIsReading] = reading;
  // console.log(isReading, '<-- READING 2')

  function onPhotoError (event) {
    // console.log(event.target.src, '<-- BROKEN IMAGE')
    return (
      event.target.classList.add('no-image'),
      event.target.src = readingChairNewsLogo
    )
  }

  return (
    <div className={'card-wrap'}>
      <div className={'article-content-wrap'} onClick={() => setIsReading(article)}>
        <div className={'source'}>{`${article.source.name}`}</div>
        <div className={'card-article-title'}>{`${article.title}`}</div>
        <div className={'line-date-author'}>
          <div className={'card-line'}></div>
          <div className={'date-author'}>{`${dayjs(article.publishedAt).format('MMMM DD')}`}{`${(!article.author ? '' : ` • ${article.author}`)}`}</div>
        </div>
      </div>
      <div className={'card-image-box'}>
        <img src={`${article.urlToImage}`} onError={(event) => onPhotoError(event)} onClick={() => setIsReading(article)} />
      </div>
    </div>
  )
}

export default Card;