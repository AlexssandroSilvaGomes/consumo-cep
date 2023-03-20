'use strict'

export const pesquisarCep = async (cep) => {
    const url = `https://api.postmon.com.br/v1/cep/${cep}` 
    const response = await fetch(url)
    const data = await response.json()
    
    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municiopio: data.cidade,
        estado: data.estado_info.nome
    }
}