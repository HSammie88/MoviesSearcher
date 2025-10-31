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
        <h1>{`${movieData.Title} (${movieData.Year})`}</h1>
        <h3 style={{color: colors.textSecondary}}>{movieData.Genre}</h3>
        </div>
        
        <div style={{
        backgroundColor: colors.cardBackground
    }} className={style['info-container']}>
        </div>

        <div style={{
        backgroundColor: colors.cardBackground
    }} className={style['movie-description-container']}>
            
        </div>

    </div>
}