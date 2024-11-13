import './FilteredPage.css';
import Card from '../Card/Card';
import fakeData from '../../fakeNews';
import { useState, useEffect } from 'react';

export function FilteredPage({ toBeFiltered, reading, data }) {
  const [filterdArticle, setFilteredArticle] = useState('')
  const [searchVal, setSearchVal] = useState('');
  const [theFilter, setTheFilter] = useState('');
  const [isReading, setIsReading] = reading;
  const [filtered, setFiltered] = toBeFiltered;
  console.log(data, '<-- DATA IN FILTER')
  // console.log(filtered, '<-- FILTERED IN FILTERED')
  
  useEffect(() => {
    // handleCheckbox()
  }, [theFilter])

  function handleSearchValue (searchValue) {
    // console.log(searchValue.target.value, '<-- SEARCH VALUE')
    setSearchVal(searchValue.target.value);
  }

  // function handleCheckbox(event) {
  //   console.log(event.target.value, '<-- CHECKBOX EVENT')
  //   if (event.target.value === 'title') {
  //     setTheFilter('title')
  //   } else if (event.target.value === 'content') {
  //     setTheFilter('content')
  //   } else if (event.target.value === 'date') {
  //     setTheFilter('date')
  //   }
  //   setTheFilter('')
  //   // setTimeout(() => {
  //   //   console.log('TIMEOUT FIRED')
  //   // }, 0)
  // };

  if (filtered === 'filter') {
    return (
      <div className={'filtered-list'}>
        <div className={'options'}>
          <div className={'search-input'}>
            <lable for={'search-value'}>Search: </lable>
            <input type={'text'} id={'search-value'} onChange={(value) => handleSearchValue(value)} />
          </div>
          <div className={'title-option option'}>
            <input type={'radio'} id={'title'} name={'filter-options'} value={'title'} />
            <label for={'title'}>Search In Titles</label>
          </div>
          <div className={'content-option option'}>
            <input type={'radio'} id={'content'} name={'filter-options'} value={'content'} />
            <label for={'content'}>Search In Article Content</label>
          </div>
          <div className={'date-option option'}>
            <input type={'radio'} id={'date'} name={'filter-options'} value={'date'} />
            <label for={'date'}>Search By Date</label>
          </div>
        </div>
        {/* {console.log(theFilter, '<-- OUTSIDE OF FILTER')}
        {data.articles.filter((article) => {
          console.log(theFilter === 'title' && article.title.includes(searchVal), theFilter, searchVal, '<-- ARTICLE B4 RETURN')
          if (theFilter === 'title' && article.title.includes(searchVal)) {
            console.log(theFilter === 'title' && article.title.includes('searchVal'), 'FILTER BY TITLE')
            setFilteredArticle(article)
          } else if (theFilter === 'content' && article.content.includes('searchVal')) {
            console.log('FILTER BY CONTENT')
            setFilteredArticle(article)
          } else if (theFilter === 'date' && article.publishedAt.includes('searchVal')) {
            console.log('FILTER BY DATE')
            setFilteredArticle(article)
          } else if (filterdArticle !== '') {
            return <Card article={filterdArticle} />
          }
        })} */}
      </div>
    )
  }

}

export default FilteredPage;