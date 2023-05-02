import React from "react";
import { Text,View } from "react-native";
import LottieWidget from "lottie-react-native"
function Error (props) {


    return (
        <View>
<Text>mesage:{props.error}</Text>
<Text>name: {props.error.name}</Text>
<Text>code:{props.error.code}</Text>
<Text>config:{props.error.config}</Text>



</View>
    )
    
    /*  <LottieWidget source={ require('../../asesst/error.json') } autoPlay/> */
            
}
export default Error;