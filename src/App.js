// import logo from './readingChairNewsLogo.png';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import FooterMenu from './components/FooterMenu/FooterMenu.jsx';
import ArticleView from './components/ArticleView/ArticleView.jsx';
import FilteredPage from './components/FilteredPage/FilteredPage.jsx';
import { fetchLastThreeMonths } from './components/ApiCalls/ApiCalls.js';
import fakeData from './fakeNews.js';
import {useEffect, useState} from 'react';

function App() {
  const [isReading, setIsReading] = useState(null)
  const [filtered, setFiltered] = useState(null)
  const [data, setData] = useState([])

  try {useEffect(() => {
    // fetchLastThreeMonths().then((aData) => setData(aData))
  }, [])
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  console.log(filtered, '<-- FILTERED')
  
  return (
    <div className="App">
      <Header reading={[isReading, setIsReading]} />
      {/* {(filtered ? <FilteredPage toBeFiltered={[filtered, setFiltered]} reading={[isReading, setIsReading]} data={data} /> : '')}
      {(isReading ? <ArticleView isReading={isReading} /> : <Home reading={[isReading, setIsReading]} data={data} />)} */}
      {((!isReading) ? (!filtered) ? <Home reading={[isReading, setIsReading]} data={data} /> : <FilteredPage toBeFiltered={[filtered, setFiltered]} reading={[isReading, setIsReading]} data={fakeData} /> : <ArticleView isReading={isReading} />)}
      <FooterMenu reading={[isReading, setIsReading]} toBeFiltered={[filtered, setFiltered]} />
    </div>
  );
}

export default App;
