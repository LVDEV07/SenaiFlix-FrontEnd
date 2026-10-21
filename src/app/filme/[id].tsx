import { BuscarFilme } from '@/api/get-filme'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { Text } from 'expo-router/build/react-navigation'
import React from 'react'
import { View, Image, ActivityIndicator, StyleSheet,Button, Pressable} from 'react-native'

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


           <View style={styles.content}>

           <Text style={styles.nome}>
            {data.nome} 
           </Text>

           <View style={styles.subinfos}>
           <Text style={styles.ano}>{data.ano}</Text>
           <Text style={styles.duracao}>{data.duracao}</Text>
           <Text style={styles.classificacao}>{data.classificacao}</Text>
           </View>

           <Pressable style={styles.btnAssistir}>
            Assistir
            </Pressable>
            <Pressable style={styles.btnLista}>
            Minha Lista
            </Pressable>

          <View style={styles.sinopse}>
           <Text style={styles.sinopseTitle}>
            Sinopse
           </Text>
           <Text style={styles.email}>{data.sinopse}</Text>
          </View>

           <Text style={styles.email}>Genero: {data.genero}</Text>
           <Text style={styles.email}>Direção: {data.diretor}</Text>
        </View>
           </View>
  )
}

const styles = StyleSheet.create({

  btnAssistir:{
      padding:20,
      backgroundColor:"#ff1717",
      maxWidth:400,
      alignItems:"center",
      color:"white",
      fontFamily: "Arial",
      fontWeight: 700,
      marginBottom: 12
  },
   btnLista:{
      padding:20,
      backgroundColor:"#747272",
      maxWidth:400,
      alignItems:"center",
      color:"white",
      fontFamily: "Arial",
      fontWeight: 700,
      marginBottom: 12
  },

  sinopseTitle:{
    fontFamily:"Arial",
    fontWeight:700,
    fontSize: 20,
    marginBottom:12
  },


  linha:{
    borderBottomWidth:3
  },

  subinfos:{
    marginTop:10,
    flexDirection:"row",
    marginBottom: 30
    
  },

  ano:{
    marginTop:10,
    fontWeight:700,
    marginRight: 20,
    fontSize:17
  },

  duracao:{
    marginTop:10,
    fontWeight:700,
    marginRight: 20,
    fontSize:17
  },

  classificacao:{
    fontWeight:500,
    marginRight: 20,
    fontSize:17,
    color: "#ee0303",
    borderColor:"#ff0000",
    borderWidth: 1,
    padding:9
  },


    content:{
      marginLeft: 20
    },

    centro:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },

    container:{
        flex:1,
  
        
        gap: 6,
   
    },

    avatar:{
        width:"100%",
        height:350,
        
        marginBottom: 8,
        borderBottomWidth:4,
        borderBottomColor:"#aaaaaab0"
        
    },

    nome:{
        fontSize:35,
        fontWeight:"800"
    },

    email:{
        fontSize: 14
    },

    sinopse:{
      borderBottomWidth:3,
      borderTopWidth:3,
      borderColor:"grey",
      paddingBottom:10,
      paddingTop:10,
      marginBottom: 12
    }
}

)
