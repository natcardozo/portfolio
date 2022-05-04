import './header.css';
import logo from '../../assets/imagens/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__conteudo'>
                <img className='header__logo' src={logo} alt="Logo Nathalia Cardozo" />
                <nav className='header__navigation'>
                    <Link className='header__link' to="/">Início</Link>
                    <Link className='header__link' to="/repositorios">Repositórios</Link>
                    <Link className='header__link' to="/contato">Contato</Link>
                </nav>
            </div>
        </header>
    )
}