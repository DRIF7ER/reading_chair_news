import './FooterMenu.css';
import readingChairNewsLogo from '../../readingChairNewsLogo.png'
import filterIcon from '../../filterIcon.png';

export function FooterMenu ({reading, toBeFiltered}) {
  const [isReading, setIsReading] = reading;
  const [filtered, setFiltered] = toBeFiltered;

  return (
    <div className={'footer-menu'}>
      <div className={'home-button'}>
        <img className={'home-icon'} src={readingChairNewsLogo} onClick={() => setIsReading(null)} />
      </div>
      <div className={'filter-box'}>
        <img className={'filter-icon'} src={`${filterIcon}`} onClick={() => setFiltered('filter')} />
      </div>
    </div>
  )
}

export default FooterMenu;