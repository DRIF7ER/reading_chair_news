import './Header.css';
import readingChairNewsLogo from '../../readingChairNewsLogo.png';
import dayjs from 'dayjs';

export function Header ({reading}) {
  const [isReading, setIsReading] = reading;
  return (
    <div className={'header'}>
      <div className={'logo-box'}>
        <img className={'logo'} src={readingChairNewsLogo} onClick={() => setIsReading(null)}/>
      </div>
      <div className={'line'}></div>
      <div className={'title-and-date-wrap'}>
        <div className={'title'}>
          <h1>Reading Chair News</h1>
        </div>
        <div className={'todays-date'}>
          <p>{dayjs(Date.now()).format('dddd, MMMM DD')}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;