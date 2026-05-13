import logoFooter from '../../assets/LOGO-footer.svg'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
