'use strict'

export const pesquisarCep = async (cep) => {
    const url = `https://brasilapi.com.br/api/cep/v2/${cep}` 
    const response = await fetch(url)
    const data = await response.json()
    
    return {
        logradouro: data.street,
        bairro: data.neighborhood,
        municiopio: data.city,
        estado: data.state
    }
}