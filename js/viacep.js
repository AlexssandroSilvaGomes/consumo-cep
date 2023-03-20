'use strict'

export const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/` 
    const response = await fetch(url)
    const data = await response.json()
    
    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municiopio: data.localidade,
        estado: data.uf
    }
}