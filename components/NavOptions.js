import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";

const data = [
     {
        id:"123",
        title:"Get a Rider",
        Image:require("../assets/ride1.png"),
        screen:"MapScreen",
     },


      {
        id:"09056",
        title:"Get a Rider",
        Image:require("../assets/ride2.png"),
        screen:"MapScreen",
     },
];



    const NavOptions = () =>{
        return(
            <FlatList
                data={data}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) => (
                    <TouchableOpacity>
                       <View>
                            <Image
                            styyle={{width:200, height:200,}}
                            Source={{required:item.Image}}/>
                            <Text>
                                {item.title}
                            </Text>
                       </View>
                    </TouchableOpacity>
                )}
            />
        )
    }

    export default NavOptions;