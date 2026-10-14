
import { Link } from 'expo-router';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity,Image} from 'react-native';


export default function Index() {
  return (
    <View>

      <Image style={style.Imagem}source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo60Kxr53bTi8g3Y5MOqD8SgR82tyJVpCi5iXj_C6Ih9P7p8Lg-u5MT7w&s=10"}}/>
      
      <View style={style.conteudo}>

      <Text style={style.Titulo}>
        SenaiFlix
      </Text>
      <Text>
        Filmes e series ilimitados. Assista onde quiser.
      </Text>
      </View>

 <Link href={'/filmes'} asChild>
      <TouchableOpacity>
        <View style={style.btn}>
          <Text style={style.btnEntrar}>Entrar</Text>
        </View>
      </TouchableOpacity>
 </Link>
    </View>
  )};

  const style = StyleSheet.create({




    conteudo:{
      marginLeft: 20
    },

    Imagem: {
      height: 700
    },

    Titulo:{
      fontSize: 40,
      fontWeight: "900",
      color: "#FF0514",
      marginTop:20,
      marginBottom: 10
    },

    btnEntrar:{
        color:"#FFFF",
        padding: 10,
        width:200,
        alignContent:"center",
        backgroundColor:"#FF0514",
        textAlign:"center",
        borderRadius: 10

    },

    btn:{
      marginTop: 20,
      alignItems:"center"
    }


  })
