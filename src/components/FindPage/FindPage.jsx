import { useContext, useEffect, useState } from "react"
import { getDataByName } from "../APIGetter"
import { Context } from "../Wrapper"
import style from "./FindPage.module.css"

export default function FindPage(){
    const {colors, movieName} = useContext(Context)
    const [movieData, setMovieData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        if(movieName){
            setError(null)
            setLoading(true)
            getDataByName(movieName)
                .then(data=>{
                    setMovieData(data)
                    setLoading(false)
                })
                .catch(error =>{
                    console.error(error)
                    setError(error)
                })
        }
    },[movieName])

    if(error) return <div style={{
        backgroundColor: colors.cardBackground,
        color: colors.textPrimary
    }} className={style['load-container']}>Ошибка загрузки</div>

    if(!movieName) return <div style={{
        backgroundColor: colors.cardBackground,
        color: colors.textPrimary
    }} className={style['load-container']}>Нет данных</div>

    if(loading) return <div style={{
        backgroundColor: colors.cardBackground,
        color: colors.textPrimary
    }} className={style['load-container']}>Загрузка...</div>

    return <div className={style['found-movie-container']}>

        <div style={{
        backgroundColor: colors.cardBackground,
        color: colors.textPrimary
    }} className={style['movie-card']}>
        <img src={movieData.Poster} alt="" />
        <h1 style={{
            fontSize: `${movieData.Title} (${movieData.Year})`.length < 20 ? '35px' : '20px'
        }}>{`${movieData.Title} (${movieData.Year})`}</h1>
        <h3 style={{color: colors.textSecondary}}>{movieData.Genre}</h3>
        </div>
        
        <div style={{
        backgroundColor: colors.cardBackground,
        color: colors.textPrimary
    }} className={style['info-container']}>

            <div className={style['text-container']}>
                <h2>Дата выхода: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Released}</p>
            </div>

            <div className={style['text-container']}>
                <h2>Рейтинг: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Rated}</p>
            </div>

            <div className={style['text-container']}>
                <h2>Длительность: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Runtime}</p>
            </div>

            <div className={style['text-container']}>
                <h2>Страна: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Country}</p>
            </div>

            <div className={style['text-container']}>
                <h2>Язык: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Language}</p>
            </div>

            <div className={style['ratings-container']}>
                <h1>Metascore</h1>
                <h1>IMDB</h1>
                <p style={{color: colors.textSecondary}}>{movieData.Metascore}</p>
                <p style={{color: colors.textSecondary}}>{movieData.imdbRating}</p>
            </div>

        </div>

        <div style={{
        backgroundColor: colors.cardBackground,
        color: colors.textPrimary
    }} className={style['movie-description-container']}>

            <div className={style['text-container-main']}>
                <h2>Продюссер: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Director}</p>
            </div>

            <div className={style['text-container-main']}>
                <h2>Сценарий: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Writer}</p>
            </div>

            <div className={style['text-container-main']}>
                <h2>Актёры: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Actors}</p>
            </div>

            <div className={style['text-container-main']}>
                <h2>Награды: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Awards}</p>
            </div>

            <div className={style['text-container-main']}>
                <h2>Кассовые сборы: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.BoxOffice}</p>
            </div>

            <div className={style['text-container-main text-container-plot']}>
                <h2>Краткое описание: </h2>
                <p style={{color: colors.textSecondary}}>{movieData.Plot}</p>
            </div>
        </div>

    </div>
}