import { Dimensions, StyleSheet } from "react-native";

const diviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,


    },
    body:{
        padding:10,
        flex: 1,
    },
    image: {
        resizeMode:"contain",
        width: diviceSize.width,
        height: diviceSize.width / 1,
    },
  
    title: {

        fontSize: 20,
        fontWeight: "bold",
        color:"#391326",
    },

    name: {   
        fontSize:15,
        fontWeight: "bold",
        color:"green",
        marginTop:5,
        
    
    },
    desc:{
       marginTop:20,
        fontSize:15,
        marginVertical:5,
    },

    size:{
        fontWeight:"bold",
        textAlign:"right",
        paddingRight:10,
        color:"grey",
        fontSize:15,
        marginTop:20,
    },
    kalınlık:{
        marginLeft:5,
    },
    Price:{
        fontWeight:"bold",
    },
    value:{
        color:"green",
    }
  

})