import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Products from './pages/Products/products';
import Detail from './pages/Detail/detail';
import Filter from './pages/Filter/filter';
import Filter2 from './pages/Filter/filter2';
import Result from './pages/FilterResult/result';
import AksesuarFilter from './pages/Filter/aksesuarType';
import AksesuarFilter2 from './pages/Filter/AksesuarFilter2'
import Favori from './pages/menupages/favori';
import Home from './pages/menupages/Home';
import { createAppContainer } from 'react-navigation'; 



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

 /* const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Favori: {
    screen: Favori,
  },
}); 

  const AppContainer = createAppContainer(DrawerNavigator); 
 */


export default function App() {
  return (
    

    <NavigationContainer style={styles.container}>
    <Stack.Navigator >
      <Stack.Screen  name="ProductsPage" component={Products} 
      /*options={{headerShown:false}}*/ 
      options={{ title:'Aksesuar Design',
      headerStyle:{ backgroundColor:'#fff'},
      headerTitleStyle:{  color:"#391326"},
      fontStyle:"italic"
    }}/>
      <Stack.Screen name="DetailPage" component={Detail}
        options={{title:'Detay',
      headerStyle:{ backgroundColor:'#fff'},
      headerTitleStyle:{  color:"#391326"},
      fontStyle:"italic"}}
/>
<Stack.Screen name="AksesuarFilter" component={AksesuarFilter2}
        options={{title:'Filtrele',
      headerStyle:{ backgroundColor:'#fff'},
      headerTitleStyle:{  color:"#391326"},
      fontStyle:"italic"}}
    />
    <Stack.Screen name="FilterPage" component={Filter}
        options={{title:'Filtrele',
      headerStyle:{ backgroundColor:'#fff'},
      headerTitleStyle:{  color:"#391326"},
      fontStyle:"italic"}}
    />
    <Stack.Screen name="FilterPage2" component={Filter2}/>
    <Stack.Screen name="ResultPage" component={Result}
      options={{title:'Filterelenmiş Ürünler',
      headerStyle:{ backgroundColor:'#fff'},
      headerTitleStyle:{  color:"#391326"},
      fontStyle:"italic"}}
    />
    </Stack.Navigator>





      <StatusBar style="auto" />


    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    alignItems: 'center',
    
    paddingTop:30,
   
  },
  header:{
    
     
  }
});
