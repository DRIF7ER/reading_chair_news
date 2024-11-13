import dayjs from 'dayjs';

export async function fetchLastThreeMonths() {
  const endPoint = 'https://newsapi.org/v2/everything?';
  let today = dayjs().format('YYYY-MM-DD');
  // let threeMonthsAgo = dayjs().subtract(3, 'months').format('YYYY-MM-DD')
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `${endPoint}q=science&q=technology&q=art&q=business&to=${today}&language=en&apiKey=${apiKey}`
  try {
    const fetchNews = await fetch(`${url}`)
    if (!fetchNews.ok) {
      throw new Error(`Network response was not ok: ${fetchNews.statusText}`)
    }
    let newsFetched = fetchNews.json();
    // console.log(await newsFetched, '<-- DATA FROM FETCH')
    return await newsFetched;
  } catch (error) {
    console.error('Fetch error', error);
    throw error;
  }
}

export async function filterArticles (aFilter) {}

// export default {
//   fetchLastThreeMonths,
//   filterArticles,
// }