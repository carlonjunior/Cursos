import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Upbar extends Component{
    render(){
        let imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png';

        return(
            <View style= {styles.container}>
                 <View>
                     <Image 
                        source={{uri: imagem }}
                        style={[{width: 50 , height: 50, marginLeft: 15}]}
                    />
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363636',
        heigth: 55
    }
})