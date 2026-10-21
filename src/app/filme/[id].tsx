import { BuscarFilme } from '@/api/get-filme'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { Text } from 'expo-router/build/react-navigation'
import React from 'react'
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native'

export default function perfil() {
  
  const {id} = useLocalSearchParams<{id:string}>()

   const {data, isLoading, isError} = useQuery({
      queryKey:["filmes"],
      queryFn:() => BuscarFilme(id)
    })

     if(isLoading){
        return(
          <View  style={styles.centro}>
            <ActivityIndicator/>
            <Text>Carregando filme...</Text>
          </View>
        )
      }
    
      if(isError){
        return(
        <View>
          <Text>Ops! Erro ao carregar filme!</Text>
        </View>
        )
      }
  
    return (

        <View style={styles.container}>
           <Image source={{uri: data.capa}} style={styles.avatar}/>
           <Text style={styles.nome}>
            {data.nome} 
           </Text>
           <Text style={styles.email}>{data.ano}</Text>
           <Text style={styles.email}>{data.duracao}</Text>

          <View>
           <Text>
            Sinopse
           </Text>
           <Text style={styles.email}>{data.sinopse}</Text>
          </View>

           <Text style={styles.email}>Genero: {data.genero}</Text>
           <Text style={styles.email}>Direção: {data.diretor}</Text>
           <Text style={styles.email}>{data.classificacao}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    centro:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },

    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
   
    },

    avatar:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom: 8
    },

    nome:{
        fontSize:20,
        fontWeight:"600"
    },

    email:{
        fontSize: 14
    }
}

)
