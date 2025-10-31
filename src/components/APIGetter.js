import apiConfig from '../configs/api.json'

export async function getDataByName(name){
    const {key} = apiConfig
    const fullUrl = `http://www.omdbapi.com/?apikey=${key}&t=${name}`

    const response = await fetch(fullUrl)
    if(!response.ok)
        throw new Error('HTTPS Error: ' + response.status + response.statusText)
    const data = await response.json()
    if(data.Error)
        throw new Error('Data Error: ' + data.Error)
    return data
}