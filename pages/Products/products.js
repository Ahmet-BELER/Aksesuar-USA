import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './producs.style';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import Config from "react-native-config";
import ProductCard from '../../components/ProductCard/productCard';
import Loading from '../../components/Loading/loading';
import Error from '../../components/Error/error';
import SearchBar from '../../components/SearchBar/SearchBar'
import Filter from '../Filter/filter';



const Products = ({ navigation }) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [list, setList] = useState(data);
    const [dataName, setDataName] = useState(data)


/*     useEffect(() => {
        fetchData();
    }, []) */

    const [token, setToken] = useState(null);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // api-token-auth için POST isteği yaparak tokeni al
      axios.post('http://127.0.0.1:8000/api-token-auth/', {
        username: 'admin',
        password: 'admin'
      })
      .then(response => {
        setToken(response.data.token);
      })
      .catch(error => console.log(error));
    }, []);
  
    useEffect(() => {
      // token varsa ürünleri getir
      if (token) {
        axios.get('http://127.0.0.1:8000/api/product/', {
          headers: { 'Authorization': `Token ${token}` }
        })
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => console.log(error));
      }
    }, [token]);




/*     const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/product/")


            setData(response.data)


            setLoading(false);


        }

        catch (error) {

            setError(JSON.stringify(error));
            setLoading(false);


        }
    } */

    const handleProduct = item => {

        navigation.navigate('DetailPage', { item })

    }

    const goFilterPage = () => {
       
        navigation.navigate('AksesuarFilter', { data: data  })
    }


    const HandleSearches = text => {

        const filteredList = data.filter(product => {
            const searchText = text.toLowerCase();
            const currentTitle = product.brandAndType.toLowerCase();

            return currentTitle.indexOf(searchText) > -1;
        })

        setList(filteredList)

    }

    const NameHandleSearches = text => {
        const filteredNameList = data.filter(product => {

            const searchText = text.toLowerCase();
            const currentName = product.name.toLowerCase();

            return currentName.indexOf(searchText) > -1;

        })

        setDataName(filteredNameList)

    }


    /* const speratorProduct = () => <View style={styles.sperator} /> */
    const renderProduct = ({ item }) =>


        (<ProductCard product={item} onSelect={() => handleProduct(item)} />)

    if (loading) {

        return <Loading />
    }

    if (error) {
        return <Error error={error} />
    }

        
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.SearchContainer}>
                {/*     <SearchBar
                search={HandleSearches}
                placeholder={'Brand and type...'} /> */}
                <FontAwesome name="list" size={35} color="#391326" style={styles.icon} onPress={goFilterPage} />


                <SearchBar
                    search={NameHandleSearches}
                    placeholder={'Search Name '} />
            </View>

            <FlatList
                style={styles.header}
                data={dataName.length > 0 ? dataName : list.length === 0 ? data : list}
                renderItem={renderProduct}
                /*ItemSeparatorComponent={speratorProduct}*/
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
}

export default Products;