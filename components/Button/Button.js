import React from "react";
import { TouchableOpacity ,Text } from "react-native";
import style from "./Button.style"

const Button = ( {title} ) =>{

    return (
        <TouchableOpacity style={style.container}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button