import React, { useState, useEffect } from 'react';
import styles from "./filter.styles"
import axios from 'axios';
import { SafeAreaView, View, Text, Image, Button,TouchableOpacity } from 'react-native';
import { SelectList, MultipleSelectList } from "react-native-dropdown-select-list";


const AksesuarFilter = ({ route, navigation })=>{
    const { data } = route.params;
    
    const [loading, setLoading] = useState(true);
    const [aksesuarData, setAksesuarData] = useState("")
    const [aksesuarName , setAksesuarName] = useState("")
    const [aksesuarId, setAksesuarId] = useState("")
    const AksesuarNameData = []


    useEffect(()=>{

        fetchAksesuarType()

    } ,[])


        const fetchAksesuarType = async () =>{

            try {
                
                const response = await axios.get("http://127.0.0.1:8000/api/aksesuar/")
                setAksesuarData(response.data)
                setLoading(false);
                
               
            } 
            
            catch (error) {
               
                setError(JSON.stringify(error));
                setLoading(false);
                
            }


        }


for(let i =0; i<aksesuarData.length; i++) {

            AksesuarNameData.push(aksesuarData[i].name);
        }


        

const goResults = ()=> {
    
console.log("go result çalıştı");


for (let i=0; i<aksesuarData.length ;i++){

        if(aksesuarData[i].name === aksesuarName){
            setAksesuarId(aksesuarData[i].id)
            console.log("aksesuarId gelmesi gerek",aksesuarId);
        }

    }


console.log("setAksesuarId" , aksesuarId);

if(aksesuarId){
    const newdata = data.filter(i => i.aksesuarName === aksesuarId)  

    navigation.navigate('FilterPage',{data:newdata},{aksesuarName:aksesuarName})}

} 

console.log("AksesuarNameData",AksesuarNameData);

return(

    <View style={styles.container}>
        <SelectList       
            setSelected={setAksesuarName}
            data={AksesuarNameData}
            placeholder={"Ürün Cinsi"}
            label="Marka"
            boxStyles={styles.boxStyle}
            inputStyles={{fontSize:20, fontWeight:"bold",color:"#391326",paddingTop:10}}
           dropdownStyles={{backgroundColor:"#f2f2f2" }}
           dropdownTextStyles={{color:"#391326", size:"15", fontSize:20}}
         />

<TouchableOpacity style={styles.Buttoncontainer} onPress={goResults} >
            <Text style={styles.title}>GO</Text>
        </TouchableOpacity>
    </View>

)



}


export default AksesuarFilter
