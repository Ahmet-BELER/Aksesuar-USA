import { StyleSheet , Dimensions } from "react-native";


export default StyleSheet.create({
    container:{
        width:Dimensions.get('window').width/1.2,
        backgroundColor:'#64b5f6',
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        height:40,
        borderRadius:10
    },
    title:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        
    }
})


