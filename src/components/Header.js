
import logo from '../images/logo_header.svg';

function Header() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Логотип" />
      </header>
    </>
  )
}

export default Header;