import {ProductItem} from "./models";
import {Credentials, CredentialsRegister} from "../interfaces/interfaces";

export const registerNewUser = ({email, password, passwordAgain} : CredentialsRegister) => {
    return fetch(`/api/clients`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'email':email, 'password':password, 'passwordAgain':passwordAgain})
    })
        .then(response => response.json())
}

export const loginUser = ({email, password} : Credentials) =>{
    return fetch(`/api/auth/login`,{
        method: 'POST',
        headers: {
           // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'email':email, 'password':password})
    })
        .then(reponse => reponse.text())                     //text vmesto json(jsonTostring
}

export const getAllProducts = (token: string) => {
    return fetch(`/api/product`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => response.json())
}

export const postNewProduct = (task: string, descript: string, token: string) => {
    return fetch(`/api/product`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'task':task, 'description':descript})
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))
}

export const advanceProduct = (product : ProductItem, token: string) => {
    return fetch(`/api/product`,{
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))
}

export const updateProduct = (id: string, product : ProductItem, token: string) => {
    return fetch(`/api/product/${id}`,{
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))
}

export const getProductById = (id : string, token: string) => {
     return fetch(`/api/product/${id}`,{
         headers: {
             Authorization: `Bearer ${token}`
         }
     })
        .then(response => {
            if (response.ok){
              return response.json()
            } else {
                throw Error("No Product with id "+id+" exist!")
            }
        })
}

export const deleteProduct = (id: string, token: string) => {
    return fetch(`/api/product/${id}`,{
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e.message))
}

