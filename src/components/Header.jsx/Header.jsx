import style from './Header.module.css'
import searchIcon from '../../assets/images/magnifier.png'
import {Context} from '../Wrapper'
import { useContext } from 'react'
import { Link } from 'react-router'

export default function Header(){
    const {colors} = useContext(Context)

    return <div style={{
        backgroundColor: colors.headerBackground,
        color: colors.textPrimary
    }} className={style['header-container']}>
        <h1>Movies Searcher</h1>
        <nav style={{
            color: colors.textPrimary
        }} className={style['href-container']}>
            <Link to="/">Главная</Link>
            <Link to="/top">Подборка</Link>
            <Link to="/random">Случайный фильм</Link>
            <Link to="/find">Расширенный поиск</Link>
        </nav>
        <div className={style['search-container']}>
            <input type="text" />
            <button className={style['search-button']}>
                <img src={searchIcon} alt="search.png" />
            </button>
        </div>
    </div>
}