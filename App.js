import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image} from 'react-native'
import tw from "tailwind-react-native-classnames"
import LottieView from 'lottie-react-native'
import { store } from './store';
import { Provider } from 'react-redux';
import NavOptions from "./components/NavOptions"



export default function App() {
  return (


        <NavOptions/>
    // <Provider  store ={store}>   
    //   <SafeAreaView style={tw`bg-white h-full`}>
    //       <View style ={tw`p-10 mt-20 `}>
    //       <Image 
    //       style={ {width:300, height:300, justifyContent:'center', marginTop:100}}
    //       source ={require("./assets/logo.png")}/>
    //       <LottieView style={{ width:300,height:200,justifyContent:'center', }} source={require('./assets/Animation - 1707529732491.json')} autoPlay loop/>
    //       </View>
      
    //       </SafeAreaView>
    // </Provider>
  );
}
 
    
// const screen = () => {
//     const [HomeScreen, setHscreen] = React.useState(null);

//     const screen = () => {
//         setTimeout(() => {
//             setHscreen('https://www.nicesnippets.com/image/nice-logo.png');
//         }, 3000);
//     }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
