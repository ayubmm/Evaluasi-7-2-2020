import React from 'react'
import {View, Text,ImageBackground, Image, StyleSheet, Button, TouchableOpacity, Alert, ScrollView} from 'react-native'

class HomeScreen extends React.Component {

click = item => {
  Alert.alert('Anda menekan tombol Edit')
}


    render() {
        return(
        <ScrollView>
        <View style={{alignItems:'center', height:'100%'}}>
                <ImageBackground source={require('../Pictures/unnamed.jpg')} style={{height:'52%', marginBottom:60}}>
                <View style={{paddingTop:70}}>
                    <Image source={require('../Pictures/fre.jpg')} style={styling.profilePic} />
                </View>
                <View>
                    <Text style={styling.profileName}>Ayub Mohammad Ma'ruf</Text>
                    <Text style={styling.profileIntro}>Hello World,
                     I am a new student of programming in PondokIT.
                      I've been learning javascript for a month now, wish me luck.</Text>
                </View>
             </ImageBackground>
                     <TouchableOpacity onPress={() => {this.click ()}} style={styling.button}>
                         <Text style={styling.buttonText}>
                             Edit </Text>
                     </TouchableOpacity>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('registering')} style={styling.button}>
                         <Text style={styling.buttonText}>
                             Register </Text>
                     </TouchableOpacity>
                    <TouchableOpacity
                          onPress={() => this.props.navigation.navigate ('log_in')}
                          style={styling.button}
                        >
                          <Text style={styling.buttonText}>
                            Login{' '}
                          </Text>
                        </TouchableOpacity>

         </View>
        </ScrollView>
             )
 }
 }

 export default HomeScreen


const styling = StyleSheet.create({
    background: {
        height:'10%', marginTop:-260
    },
    button: {
        backgroundColor: '#696969', alignSelf: 'center',
         width: 200, height: 50, borderRadius: 90, marginTop:20
    },
    buttonText: {
        color: '#fff', alignSelf: 'center',
         textAlign: 'center', fontSize: 22
    },
    profilePic: {
        width: 200, height: 200, alignSelf: 'center',
        borderWidth: 5, borderRadius: 360, borderColor: '#fff'
    },
    profileName: {
        fontWeight: 'bold', color: '#000', alignSelf: 'center',
        paddingTop: 20, fontSize: 30
    },
    profileIntro: {
        color: '#000', alignSelf: 'center', paddingTop: 20,
         textAlign: 'center'
    }
})

