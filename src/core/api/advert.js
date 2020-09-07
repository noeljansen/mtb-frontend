import { API } from '../../config'

export const getAdvert = (advertId) => {
    return fetch(`${API}/ads/${advertId}`, {
        method: "GET"
    })
        .then(response => {
            // console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log('Could not connect to server!')
            console.log(err)
            return false
        })
}


export const getAdverts = (sort) => {
    return fetch(`${API}/ads`, {
        method: "GET"
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log('Could not connect to server!')
            console.log(err)
            return false
        })
}