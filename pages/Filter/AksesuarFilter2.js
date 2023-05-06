import React, { useState, useEffect } from 'react';
import styles from "./filter.styles"
import axios from 'axios';
import { SafeAreaView, View, Text, Image, Button,TouchableOpacity } from 'react-native';
import { SelectList, MultipleSelectList } from "react-native-dropdown-select-list";


const AksesuarFilter2 = ({ route, navigation })=>{
    const { data } = route.params;
    const [loading, setLoading] = useState(true);
    const [aksesuarData, setAksesuarData] = useState([]);
    const [aksesuarName , setAksesuarName] = useState("");
    const [aksesuarId, setAksesuarId] = useState("");
    const [newdata, setNewData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(()=>{
        setNewData(data.filter(item => item.aksesuarName === aksesuarId));
    }, [aksesuarId, data])

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
          axios.get('http://127.0.0.1:8000/api/aksesuar/', {
            headers: { 'Authorization': `Token ${token}` }
          })
          .then(response => {
            setAksesuarData(response.data);
            console.log("aksesuarData     " , aksesuarData);
              
          })
          .catch(error => console.log(error));
        }
        setLoading(false);
      }, [token]);



    const goResults = () => {
        if(aksesuarId){
        console.log("Seçilen aksesuar: ", aksesuarId)
        navigation.navigate('FilterPage', { data: newdata , aksesuarId: aksesuarId });}
    }

    return(
        <View style={styles.container}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <SelectList       
    setSelected={setAksesuarId}
    data={aksesuarData.map(item => ({ label: item.id, value:  item.name}))}
    placeholder={"Ürün Cinsi"}
    label="Marka"
    boxStyles={styles.boxStyle}
    inputStyles={{fontSize:20, fontWeight:"bold",color:"#391326",paddingTop:10}}
    dropdownStyles={{backgroundColor:"#f2f2f2" }}
    dropdownTextStyles={{color:"#391326", size:"15", fontSize:20}}
    selectedItem={aksesuarName}
/>

            )}
            <TouchableOpacity style={styles.Buttoncontainer} onPress={goResults} >
                <Text style={styles.title}>GO 2</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AksesuarFilter2
