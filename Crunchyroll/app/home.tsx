import {Text,View,TouchableOpacity,Image,StyleSheet,ImageBackground,FlatList,Dimensions} from "react-native";
import {Feather} from "@expo/vector-icons";
import {router} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";
import {useEffect,useRef,useState} from "react";

 const{width} = Dimensions.get("window");

export default function inicio(){

    const flatListRef = useRef(null);
    const [indexAtual,setIndexAtual] = useState(0);

    useEffect(() =>{
        const intervalo = setInterval(() =>{
            let proximoIndex = indexAtual + 1;
            if(proximoIndex >= Destaques.length){
                proximoIndex= 0;
            }

            flatListRef.current?.scrollToIndex({
            index: proximoIndex,
            animated: true
        });
            setIndexAtual(proximoIndex);

        },2500); //0 3000 se refere ao tempo em milissegundos, ou seja, a cada 3 segundos a imagem vai trocar

        return () => clearInterval(intervalo);


    },[indexAtual]);

    const abrirLink = () =>{
        router.push("/")
    };

    const Destaques = [
        {id:"1", imagem: require('../assets/images/mob.png'),titulo:"Mob Psycho 100",},
        {id:"2", imagem: require('../assets/images/silencio.jpg'),titulo:"A Voz do Silêncio",},
        {id:"3", imagem: require('../assets/images/violet.jpg'),titulo:"Violet Evergarden",},
        {id:"4", imagem: require('../assets/images/hunter.png'),titulo:"Hunter X Hunter",},
        {id:"5", imagem: require('../assets/images/titan.png'),titulo:"Attack on Titan",},
    ];  

    const emAlta =[
        {id:"1",imagem:require('')}

    ];

   return(

    

    <View style={styles.container}>

        <FlatList
            ref={flatListRef}
            data={Destaques}
            horizontal
            pagingEnabled 
            showsHorizontalScrollIndicator={true}
            snapToAlignment="center"
            snapToInterval={width*0.9}
            decelerationRate="fast"
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingHorizontal:10}}
            getItemLayout={(data,index) => ({
                length: width*0.9,
                offset: (width*0.9) *index,
                index,

            })}

           renderItem={({item}) => (

                <View style={styles.destaque}>

                    <ImageBackground 
                    source={item.imagem} 
                    style={styles.imagemDestaque}
                    imageStyle={{borderRadius:30}}
                    >

                        <LinearGradient
                        colors={["transparent","rgba(0,0,0,0.8)"]}
                        style={styles.gradiente}
                        >

                        <Text style={styles.titulo}>{item.titulo}</Text>

                        </LinearGradient>

                    </ImageBackground>

                 </View>

         )}
        
        />
        
        <View style={styles.barraInferior}>
            <View style={styles.label}>
            <Feather name="home" size={25} color="#c05702"/>
            <Text style={styles.label}>Inicio</Text>
            </View>
            
            <View style={styles.label}>
            <Feather name="bookmark" size={25} color="#ffffff"/>
             <Text style={styles.label}>Listas</Text>
            </View>

            <View style={styles.label}>
            <Feather name="command" size={25} color="#ffffff"/>
             <Text style={styles.label}>Explorar</Text>
            </View>

            <View style={styles.label}>
            <Feather name="star" size={25} color="#ffffff"/>
             <Text style={styles.label}>Simulcasts</Text>
            </View>
            <View style={styles.label}>
            <TouchableOpacity style={styles.perfil} onPress={abrirLink}><ImageBackground source={require('../assets/images/rocha.png')} style={styles.imagemPerfil}/></TouchableOpacity>
            <Text style={styles.label}>Trocar conta</Text>
            </View>
        </View>
  
        <LinearGradient colors={["#000000","transparent"]} style={styles.barraSuperior}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
        <Feather name="search" size ={35} color="#ffffff" style={styles.search}/>    
        <Feather name="cast" size={35} color="#ffffff" />
        </LinearGradient>
        
    </View>

);
};

const styles = StyleSheet.create({
    gradiente:{
    flex:1,
    justifyContent:"flex-end",
    padding:15,
    borderRadius:30,
},

    textoanime:{
        position:"absolute",
        bottom:15,
        left:15,
    },

    titulo:{
        color:"#fff",
        fontSize:22,
        fontWeight:"bold",
    },

    descricao:{
        color:"#ffff",
        fontSize:14,
    },

    destaque:{
        width: width *0.9,
        height:310,
        marginHorizontal:5,
        borderRadius:"10%",
        overflow:"hidden",

    },

    imagemDestaque:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
    },

    imagemPerfil:{
        height:"100%",
        width:"100%",
        resizeMode:"cover",
    },

    perfil:{
        width:30,
        height:30,
        borderRadius:"100%",
        borderColor:"#ffffff",
        overflow:"hidden",
        borderWidth:0,
        resizeMode:"cover",
    },

    label:{
        alignItems:"center",
        color:"#ffffff",
        fontSize:10,
    },

    search:{
        marginLeft:100,
    },

  barraSuperior: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },

    logo:{
        height:65,
        width:65,
       
    },
    container:{
        flex:1,
        backgroundColor:"#000000",
    },

    barraInferior:{
    position:"absolute",
    bottom:0,
    left:0,
    right:0,
    height:70,
    backgroundColor:"#262626",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    borderTopLeftRadius:"10%",
    borderTopRightRadius:"10%",
    paddingHorizontal:15,
    }
    
});