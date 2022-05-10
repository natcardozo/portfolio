import './header.css';
import logo from '../../assets/imagens/logo.svg';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                <div className='header__navigation__botao--mobile'>
                    <KeyboardArrowDownIcon sx={{ color: "#ffffff", mt: "1rem", fontSize: "2rem" }} />
                </div>
                <div className='header__navigation--mobile'>
                    <nav className='header__navigation--mobile' id='navigation--mobile'>
                        <div className='header__navigation__item--mobile'>
                            <HomeIcon sx={{ color: "#ffffff", width: "25px"}} />
                            <Link className='header__link--mobile' to="/">Início</Link>
                        </div>
                        <div className='header__navigation__item--mobile'>
                            <ArticleIcon sx={{ color: "#ffffff", width: "25px"}} />
                            <Link className='header__link--mobile' to="/repositorios">Repositórios</Link>
                        </div>
                        <div className='header__navigation__item--mobile'>
                            <AccountCircleIcon sx={{ color: "#ffffff", width: "25px"}} />
                            <Link className='header__link--mobile' to="/contato">Contato</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}