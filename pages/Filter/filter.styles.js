import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10, 
        paddingVertical:50,
        padding: 10 ,
        border:10,
       
      
       fontSize:20,
       justifyContent:"space-between",
       marginBottom:30,
       backgroundColor:"#f2f2f2"
       
        
    },
    select:{
      color:"red",
       height:"300",
    },
    Buttoncontainer:{
        width:Dimensions.get('window').wid,
        backgroundColor:'#391326',
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        borderRadius:10

    },
    title:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        
    },
    boxStyle:{
        height:80,aligenItems:"center",flexDirection:"row", marginBottom:20,
    }
})