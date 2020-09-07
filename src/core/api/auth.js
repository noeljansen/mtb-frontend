import { API } from '../../config'

export const userLogin = (email, password) => {
    return fetch(`${API}/users/signin`, {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })   // This needs to be a string and not a JSON object!
    })
        .then(response => {
            return response.json()
        }
        )
        .catch(error => {
            console.log(`userLogin Error: ${error}`)
        })
}

export const setAuthJWT = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('jwt')) {
        //console.log(`Returning JWT`)
        return JSON.parse(localStorage.getItem('jwt'))
    } else
        return false
}

export const signOut = (token, next) => {
    console.log(`In Signout. Token: ${token}`)
    if (typeof window !== 'undefined') {
        console.log('Signing out user ...')

        return fetch(`${API}/users/signout`, {
            method: 'Post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                // Delete JWT from local browser
                localStorage.removeItem('jwt')
                console.log('removing JWT')
                next()
            })
            .catch(err => {
                console.log(`signOut Error: ${err}`)
            })

    }

}