import NavMenu from '../NavMenu/NavMenu';
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className='header__content'>
                <span className='header__title'>Cайт!</span>
                <NavMenu />
            </div>
        </header>
    );
}

export default Header;