import style from './Header.module.css'
import searchIcon from '../../assets/images/magnifier.png'
import {Context} from '../Wrapper'
import { useContext } from 'react'

export default function Header(){
    const {colors} = useContext(Context)

    return <div style={{
        backgroundColor: colors.headerBackground,
        color: colors.textPrimary
    }} className={style['header-container']}>
        <h1>Movies Searcher</h1>
        <div style={{
            color: colors.textPrimary
        }} className={style['href-container']}>
            <a href="#">Главная</a>
            <a href="#">Подборка</a>
            <a href="#">Случайный фильм</a>
            <a href="#">Расширенный поиск</a>
        </div>
        <div className={style['search-container']}>
            <input type="text" />
            <button className={style['search-button']}>
                <img src={searchIcon} alt="search.png" />
            </button>
        </div>
    </div>
}