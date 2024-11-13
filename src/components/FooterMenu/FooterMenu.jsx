import './FooterMenu.css';
import readingChairNewsLogo from '../../readingChairNewsLogo.png'

export function FooterMenu () {
  return (
    <div className={'footer-menu'}>
      <div className={'home-button'}>
        <img className={'home-icon'} src={readingChairNewsLogo} />
      </div>
    </div>
  )
}

export default FooterMenu;