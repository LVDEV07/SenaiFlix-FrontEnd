import React from 'react'

export async function BuscarFilmes() {
  const resposta = await fetch("http://localhost:3000/filmes/")


  if(!resposta.ok){
    throw new Error("Erro ao busca filmes")
  }

  const json = await resposta.json()
  return json
}

