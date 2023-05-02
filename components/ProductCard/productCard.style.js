import { StyleSheet , Dimensions} from "react-native";

export default StyleSheet.create({

    card: {
        margin: 5,
        width: Dimensions.get("window").width / 2.2,
       
        backgroundColor: "#ECEFF1",
        justifyContent: "space-between",
        borderRadius: 5,
      },
      imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10, 
        paddingBottom:10,
        
      },
    
      descriptionConatiner: {
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 10,
      },
      image: {
        width: Dimensions.get("window").width / 2.5,
        height: Dimensions.get("window").height / 3.5,
        borderRadius: 5,
       
      
      },
      title: {
        fontWeight: "bold",
        marginTop:5,
        color:"#391326",
       
      },
      name: { 
        font:10,
        fontWeight:'bold',
        color:"green"
              
      },
      Mat:{
color: "black",
fontWeight: "bold",
      },
      kalınlık: {  color: "#808080" },
      size: { color: "grey",  fontSize: 12 },
      description:{ 
flex:1,

      }
    });