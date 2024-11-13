import './Header.css';
import readingChairNewsLogo from '../../readingChairNewsLogo.png';

export function Header () {
  return (
    <div className={'header'}>
      <div className={'logo-box'}>
        <img className={'logo'} src={readingChairNewsLogo} />
      </div>
      <div className={'title-and-date-wrap'}>
        <div className={'title'}>
          <h1>Reading Chair News</h1>
        </div>
        <div className={'todays-date'}>
          <p>A Date</p>
        </div>
      </div>
    </div>
  )
}

export default Header;