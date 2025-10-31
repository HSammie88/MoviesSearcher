import style from './Header.module.css'
import searchIcon from '../../assets/images/magnifier.png'
import {Context} from '../Wrapper'
import { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
// eslint-disable-next-line no-unused-vars
import { useSpring, config, animated } from '@react-spring/web'

export default function Header(){
    const {colors, setMovieName} = useContext(Context)
    const [inputFolded, setInputFolded] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const inputRef = useRef()
    const navigate = useNavigate()

    const inputSprings = useSpring({
        transform: inputFolded ? 'scaleX(0)' : 'scaleX(1)',
        opacity: inputFolded ? 0 : 1,
        config: config.slow
    })

    const buttonSprings = useSpring({
        opacity: inputFolded ? 1 : 0,
        config: config.slow
    })

    const handleSearchClick = () =>{
        setInputFolded(current => !current)
        if(inputFolded)
            setTimeout(()=>inputRef.current.focus(), 500)
    }

    const handleKeyDown = key =>{
        if(key === 'Enter' && inputRef.current.value.length > 0){
            setMovieName(inputRef.current.value)
            setTimeout(()=>{
                setInputFolded(true)
                inputRef.current.value = ''
                navigate('/find')
            }, 200)
        }
    }

    return <div style={{
        backgroundColor: colors.headerBackground,
        color: colors.textPrimary
    }} className={style['header-container']}>
        <h1>Movies Searcher</h1>
        <nav className={style['href-container']}>
            <Link to="/">Главная</Link>
            <Link to="/top">Подборка</Link>
            <Link to="/random">Случайный фильм</Link>
            <Link to="/find">Расширенный поиск</Link>
        </nav>
        <div className={style['search-container']}>
            <animated.input onKeyDown={(e)=>handleKeyDown(e.key)} maxLength={20} ref={inputRef} onBlur={()=>setInputFolded(true)} style={{
                ...inputSprings,
                background: colors.button.hoverBackground,
                color: colors.textPrimary
            }} type="text" />
            <animated.button style={{
                ...buttonSprings,
                backgroundColor: !isHovered ? colors.button.background : colors.button.hoverBackground
            }} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onClick={()=>handleSearchClick()} className={style['search-button']}>
                <img src={searchIcon} alt="search.png" />
            </animated.button>
        </div>
    </div>
}