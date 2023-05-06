import React, { useState, useEffect } from 'react';
import styles from "./filter.styles"
import DateTimePicker from '@react-native-community/datetimepicker';

import { SafeAreaView, View, Text, Image, Button,TouchableOpacity } from 'react-native';
import { SelectList, MultipleSelectList } from "react-native-dropdown-select-list";



const Filter = ({ route, navigation }) => {
   const { data } = route.params;
console.log("filtre data" , data);

   const newdata = []
   const newdata2 = []
   const newdata3 = []
   const nameFilter = []
   const sızeFilter = []
   const thicknessFilter = []
   const onlyMatData = []
   const MathFilter = ["Matt",0]
   const onlyNameData = []


   const [marka, setMarka] = useState("");
   const [sizeValue, setSizeValue] = useState("");
   const [thicknesValue, setThicknesValue] = useState("");
   const [twofilterValue, setTwofilterValue] = useState(false);
   const [notfilter,setNotfilter]=useState(true)
   const [mat, setMat] = useState("")
  

  




      




   for (let i = 0; i < data.length; i++) {
      nameFilter.push(data[i].brandAndType)
   }

   const uniqMarka = nameFilter.filter((item, index) => {
      return nameFilter.indexOf(item) === index;

   });








   for (let i = 0; i < newdata.length; i++) {
      sızeFilter.push(newdata[i].size)
   }


   const uniqueSizeValue =sızeFilter.filter((item, index) => {

      return sızeFilter.indexOf(item) === index
    })



  for (let i = 0; i < newdata.length; i++){
   thicknessFilter.push(newdata[i].kalınlık)
  }

const uniqueThicknessFilter = thicknessFilter.filter((item, index) => {

   return thicknessFilter.indexOf(item) === index
})


////////  ------------------      SİZE AND THİCNES FİLTER AREA -------------------- /////////







const goResults = () => {
  









console.log("mat FLTER PAGE",mat);
console.log(" data go result data" ,data);
   navigation.navigate('ResultPage', { datam: data, marka:marka ,size:sizeValue, kalınlık:thicknesValue, mat:mat   }  )

} 


   return (
      <View style={styles.container}>
      <View>
         <SelectList       
            setSelected={setMarka}
            data={uniqMarka}
            placeholder={" Marka seçin"}
            label="Marka"
            boxStyles={styles.boxStyle}
            inputStyles={{fontSize:20, fontWeight:"bold",color:"#391326",paddingTop:10}}
           dropdownStyles={{backgroundColor:"#f2f2f2" }}
           dropdownTextStyles={{color:"#391326", size:"15", fontSize:20}}
         />
         <SelectList
            setSelected={setSizeValue}
            data={uniqueSizeValue}
            boxStyles={styles.boxStyle}
            inputStyles={{fontSize:20, fontWeight:"bold",color:"#391326",paddingTop:10}}
            placeholder={"Ebat Seçin"}
            label="Marka"
            dropdownStyles={{backgroundColor:"#f2f2f2" }}
           dropdownTextStyles={{color:"#391326", size:"15", fontSize:20}}
         />
         <SelectList
            data={uniqueThicknessFilter}
            setSelected={setThicknesValue}
            inputStyles={{fontSize:20, fontWeight:"bold",color:"#391326",paddingTop:10}}
            boxStyles={styles.boxStyle}
            placeholder={"Kalınlık seçin 'mm' "}
            dropdownStyles={{backgroundColor:"#f2f2f2" }}
            dropdownTextStyles={{color:"#391326", size:"15", fontSize:20}}
         />
                <SelectList
            data={MathFilter}
          setSelected={setMat} 
            inputStyles={{fontSize:20, fontWeight:"bold",color:"#391326",paddingTop:10}}
            boxStyles={styles.boxStyle}
            placeholder={"Parlak & Mat "}
            dropdownStyles={{backgroundColor:"#f2f2f2" }}
            dropdownTextStyles={{color:"#391326", size:"15", fontSize:20}}
         /> 
         </View>
         <View>
   <TouchableOpacity style={styles.Buttoncontainer} onPress={goResults}>
            <Text style={styles.title}>Filtrele </Text>
        </TouchableOpacity>
        </View>
      
      </View>
   )
}

export default Filter 