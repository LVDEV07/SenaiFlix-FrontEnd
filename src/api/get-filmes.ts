import React from 'react'

export async function BuscarFilmes() {
  const resposta = await fetch("http://10.92.201.130:3000/filmes")


  if(!resposta.ok){
    throw new Error("Erro ao busca filmes")
  }

  const json = await resposta.json()
  return json
}

