import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './detail.style';
import Loading from '../../components/Loading/loading'
import Error from '../../components/Error/error';

const Detail = ({ route }) => {

    const { item } = route.params;
    console.log(item);
    /*
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true);
    const [data,setData] =useState([]);

    useEffect( () => {
        fetchData();
    },[])

    const fetchData = async () =>{
        try {
            const {data:productData} = await axios.get('https://fakestoreapi.com/products/' + id )
            setData(productData);
            setLoading(false);
        } 
        
        catch (error) {
            setError(error.message);
            setLoading(false);  
        }
    } */

    /*   if (loading) {
  
          return <Loading/> 
         }
         if(error) {
          return <Error/>
         } */


    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.body}>
                <Text style={styles.title}>Brand : {item.brandAndType}</Text>
                <Text style={styles.name}>Name : {item.name}</Text>
                <Text style={styles.desc}> {item.description}</Text>
                <Text style={styles.kalınlık}>Kalınlık:{item.kalınlık} mm</Text>
                <Text style={styles.Price}>Price:
                    <Text style={styles.value}> {item.m2price} {item.CashType} </Text>
                </Text>
                <Text style={styles.size}>Size: {item.size} </Text>
            </View>
        </SafeAreaView>
    )
}

export default Detail;