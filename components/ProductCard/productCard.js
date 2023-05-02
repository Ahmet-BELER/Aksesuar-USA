import React from 'react';
import { View, Text, Image , TouchableWithoutFeedback,ScrollView } from 'react-native';
import style from './productCard.style'

const ProductCard = ({ product , onSelect, }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
     <View style={style.card}>
        <View style={style.imageContainer}>

        <Image style={style.image} 
            source={{uri:product.image}}
          resizeMode="cover"
            //  resizeMode="contain"
        />
  
        </View>
           <View style={style.descriptionConatiner}>
       <Text style={style.title}>Brand:{product.brandAndType}</Text> 
       <Text style={style.name}>Name:{product.name}</Text> 
       <View style={style.description}>
       <Text style={style.kalınlık}>Kalınlık:{product.kalınlık} mm </Text>
      
  
        
       
       
       <Text style={style.size}>Size: {product.size}</Text>
       {  product.Mat === true ? (<Text style={style.Mat}>Mat</Text>) : null}
       </View>
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard;   