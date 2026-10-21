import { BuscarFilmes } from "@/api/get-filmes";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, } from "react-native";


export default function filmes() {
    const router = useRouter()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["filmes"],
        queryFn: BuscarFilmes
    })

    if (isLoading) {
        return (
            <View style={style.centro}>
                <ActivityIndicator />
                <Text>Carregando filmes...</Text>
            </View>
        )
    }

    if (isError) {
        return (
            <View style={style.centro}>
                <Text>Ops! Erro ao carregar filmes!</Text>
            </View>
        )
    }


    return (

        <View>


            <Text style={style.title}>
                Catalogo
            </Text>

            <FlatList
                data={data}
                contentContainerStyle={style.lista}
                renderItem={({ item }) => (

                    <TouchableOpacity style={style.card} onPress={() => router.push(`/filme/${item.id}` as any)}>
                        <Image style={style.avatar} source={item.poster} />

                        <View>

                            <View >
                                <Text style={style.nome}>{item.nome}</Text>
                            </View>
                            <View>
                                <Text style={style.anoEduracao}>{item.ano} * {item.duracao}</Text>

                                <Text style={style.genero}>{item.genero}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}
const style = StyleSheet.create({

    lista: {
        padding: 16,
        gap: 12
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#831010",
        borderRadius: 12,
        padding: 14,
        gap: 14,





    },
    nome: {
        fontSize: 24,
        fontWeight: 700,
        maxWidth: 400,
                color:"#FFFF"



    },

    anoEduracao: {
        fontSize: 13,
        marginTop: 5,
               color:"#ffffff80"

    },

    genero: {
        fontSize: 13,
        marginTop: 8,
        marginLeft: 10,
        color:"#ffffff80"
    },

    avatar: {
        width: 100,
        height: 150,
        borderRadius: 5,
        borderWidth:3,
        borderColor:"#FFF"

    },

    centro: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },

    title: {
        color: "#564d4d",
        fontSize: 24,
        fontWeight: 700,
        maxWidth: 400,
        margin: 14
    },

    bgcolor: {
        backgroundColor: "#0000"
    }
})
