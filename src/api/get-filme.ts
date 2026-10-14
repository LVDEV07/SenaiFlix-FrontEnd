import React from 'react'

export async function BuscarFilme(id: string) {
  const resposta = await fetch("http://10.92.201.130:3000/filmes/" + id)


  if(!resposta.ok){
    throw new Error("Erro ao buscar o filme")
  }

  const json = await resposta.json()
  return json
}

