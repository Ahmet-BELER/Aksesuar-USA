import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import styles from "./result.style"
import ProductCard from  "../../components/ProductCard/productCard"

const Result = ({route,navigation})=>{
    const {datam, data, mat,marka}= route.params;
    const data2 = []

 if(mat){
    for(let i=0; i<datam.length; i++) {
        if(datam[i].Mat === true && datam[i].brandAndType === marka){
            data2.push(datam[i])
        }
    }
 }

 for(let i=0; i<datam.length; i++){
    if( !(datam[i].brandAndType === marka)){
        delete datam[i]
    }
 }

    const uniqueDatam = datam.filter((item, index) => {
        return datam.indexOf(item) === index;
    }); 

    const handleProduct = item => {
        navigation.navigate('DetailPage', { item });
    }

   const renderFilterProducts = ({item}) => {
       return (
           <ProductCard product={item} onSelect={() => handleProduct(item)} />
       )
   }
   
   console.log("Mat Result", mat);
   console.log("Mat Result data", data);

   
    return( 
        <SafeAreaView style={styles.container}>
            <View style={styles.navigatorContainer}>
                 <Text style={styles.text}>
                    <FontAwesome 
                        name="list" 
                        size={32}
                        onPress={() => {
                            navigation.goBack()
                        } }
                    />
                </Text>
                <Text style={styles.text}>
                    <FontAwesome 
                        name="home" 
                        size={32}
                        onPress={() => {
                            navigation.navigate('ProductsPage', {data})
                        } }
                    />
                </Text>
            </View>
            <FlatList 
                style={styles.header}
                data={ mat ? data2 : datam}
                renderItem={renderFilterProducts}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
            />   
        </SafeAreaView>
    )
}

export default Result;
