import './Card.css';

export function Card ({ article }) {
  return (
      <div className={'card-wrap'}>
        <div className={'article-content-wrap'}>
          <div className={'article-title'}>{`${article.title}`}</div>
          <div className={'date-author'}>{`${article.author}`}</div>
          <div className={'source'}>{`${article.source.name}`}</div>
        </div>
        <div className={'card-image-box'}>
          <img src={`${article.urlToImage}`} />
        </div>
      </div>
  )
}

export default Card;