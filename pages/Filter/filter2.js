import React, { useState, useEffect } from 'react';
import styles from "./filter.styles"
import axios from 'axios';
import { SafeAreaView, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { SelectList, MultipleSelectList } from "react-native-dropdown-select-list";



const Filter = ({ route, navigation }) => {

   const { data } = route.params;
   const nameFilter = []
   const sızeFilter = []
   const thicknessFilter = []
   const sizeValue2 = []
   const Greatdata = []
   const [marka, setMarka] = useState("");
   const [sizeValue, setSizeValue] = useState("");
   const [thicknesValue, setThicknesValue] = useState("");
   const [secoundFiltered, setSecoundFiltered] = useState("");



   for (let i = 0; i < data.length; i++) {
      nameFilter.push(data[i].brandAndType)
   }

   for (let i = 0; i < data.length; i++) {
      sızeFilter.push(data[i].size)
   }


   for (let i = 0; i < data.length; i++) {
      thicknessFilter.push(data[i].kalınlık)
   }



   const nameFilterResult = nameFilter?.filter((item, index) => {
      return nameFilter.indexOf(item) === index;

   });


   const uniqueSizeValue = sızeFilter?.filter((item, index) => {

      return sızeFilter.indexOf(item) === index
   })

   const uniqueThicknessFilter = thicknessFilter.filter((item, index) => {

      return thicknessFilter.indexOf(item) === index
   })


   if (marka) {

      for (let i = 0; i < data.length; i++) {
         if (data[i].brandAndType === marka) {
            Greatdata.push(data[i])
         }
      }
   }

   if (sizeValue) {

      for (let i = 0; i < data.length; i++) {
         if (data[i].size === sizeValue) {

            Greatdata.push(data[i])
         }

      }
   }

   if(thicknesValue){
   for (let i = 0; i < data.length; i++) {

      if (data[i].kalınlık === thicknesValue) {
         Greatdata.push(data[i])
      }

   }}

   const uniqueGreatData = Greatdata.filter((item, index) => {

      return Greatdata.indexOf(item) === index

   })


/// ------------------------------------ filtre bölümü --------------------------


   if (marka) {
      for (let i = 0; i < uniqueGreatData.length; i++) {
         if (uniqueGreatData[i].brandAndType !== marka) {

            delete uniqueGreatData[i]

         }
      }

   }



console.log("marka filtresi yemiş  veriler", uniqueGreatData) 




   if (sizeValue) {

      for (let i = 0; i < uniqueGreatData.length; i++) {
         if (uniqueGreatData[i].size !== sizeValue) {

            delete uniqueGreatData[i]
            
         }

         else {


         } 
        
      }
   }


/*       if(thicknesValue ){
         for(let i = 0; i < uniqueGreatData.length; i++){
            if(uniqueGreatData[i].size !== thicknesValue){
               delete uniqueGreatData[i]
               
            }
            else{
               
            }
      }
      } 
*/



   const goResults = () => {


      console.log("2 li filtre yemiş  veriler", uniqueGreatData)

      navigation.navigate('ResultPage', { datam: uniqueGreatData }, { data: data })
   }



   return (
      <View style={styles.container}>
         <View>
            <SelectList

               setSelected={setMarka}
               data={nameFilterResult}
               placeholder={" Marka seçin"}
               label="Marka"
               boxStyles={styles.boxStyle}
               inputStyles={{ fontSize: 20, fontWeight: "bold", color: "#391326", paddingTop: 10 }}
               dropdownStyles={{ backgroundColor: "#f2f2f2" }}
               dropdownTextStyles={{ color: "#391326", size: "15", fontSize: 20 }}
               defaultOption={{ marka: "por" }}
            />

            <SelectList
               setSelected={setSizeValue}
               data={uniqueSizeValue}
               boxStyles={styles.boxStyle}
               inputStyles={{ fontSize: 20, fontWeight: "bold", color: "#391326", paddingTop: 10 }}
               placeholder={"Ebat "}
               label="Marka"
               dropdownStyles={{ backgroundColor: "#f2f2f2" }}
               dropdownTextStyles={{ color: "#391326", size: "15", fontSize: 20 }}
            />
            <SelectList
               data={uniqueThicknessFilter}
               setSelected={setThicknesValue}
               inputStyles={{ fontSize: 20, fontWeight: "bold", color: "#391326", paddingTop: 10 }}
               boxStyles={styles.boxStyle}
               placeholder={"Kalınlık seçin 'mm' "}
               dropdownStyles={{ backgroundColor: "#f2f2f2" }}
               dropdownTextStyles={{ color: "#391326", size: "15", fontSize: 20 }}

            />
            <SelectList
               data={uniqueThicknessFilter}
               setSelected={setThicknesValue}
               inputStyles={{ fontSize: 20, fontWeight: "bold", color: "#391326", paddingTop: 10 }}
               boxStyles={styles.boxStyle}
               placeholder={"Parlak Mat "}
               dropdownStyles={{ backgroundColor: "#f2f2f2" }}
               dropdownTextStyles={{ color: "#391326", size: "15", fontSize: 20 }}
            />
         </View>
         <View>
            <TouchableOpacity style={styles.Buttoncontainer} onPress={goResults}>
               <Text style={styles.title}>Filtrele</Text>
            </TouchableOpacity>
         </View>

      </View>
   )
}

export default Filter 