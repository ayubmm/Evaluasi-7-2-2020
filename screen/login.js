import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

export default class Login extends Component {
  constructor () {
    super ();
    (this.state = {
      nama: '', nama1: '', nama2: '', nama3: ''
    });
  }

  click = item => {
    Alert.alert ('Anda menekan tombol Edit');
  };

  render () {
    return (
      <ScrollView>
        <View
          style={{alignItems: 'center', backgroundColor: '#fff', flex: 1}}
        >

          <Text
            style={{
              fontSize: 25,
              color: '#696969',
              margin: 25,
              alignItems: 'flex-end',
            }}
          >
            Login Screen
          </Text>

          <View>

            <Text style={{alignSelf: 'flex-start', fontSize: 17}}>
              First Name
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                backgroundColor: '#fff',
                width: 320,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >

              <TextInput
                style={{width: '85%'}}
                onChangeText={text => {
                  this.setState ({nama: text});
                }}
                placeholder="First Name"
              />

              <Image
                source={require ('../Pictures/id-card.png')}
                style={{width: 40, height: 40,  alignSelf:'center'}}
              />

            </View>
            <Text>{this.state.nama}</Text>
          </View>

          <View>
            <Text style={{alignSelf: 'flex-start', fontSize: 17}}>
              Last Name
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                backgroundColor: '#fff',
                width: 320,
              }}
            >

              <TextInput
                onChangeText={text => {
                  this.setState ({nama1: text});
                }}
                placeholder="Last Name"
              />

            </View>
            <Text>{this.state.nama1}</Text>
          </View>

          <View>
            <Text style={{alignSelf: 'flex-start', fontSize: 17}}>Email</Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                backgroundColor: '#fff',
                width: 320,
              }}
            >

              <TextInput
                onChangeText={text => {
                  this.setState ({nama2: text});
                }}
                placeholder="Email"
              />

            </View>
            <Text>{this.state.nama2}</Text>
          </View>

          <View>
            <Text style={{alignSelf: 'flex-start', fontSize: 17}}>
              Phone Number
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                backgroundColor: '#fff',
                width: 320,
              }}
            >

              <TextInput
                onChangeText={text => {
                  this.setState ({nama3: text});
                }}
                placeholder="Phone Number"
              />

            </View>
            <Text>{this.state.nama3}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('profile')}}

            style={{
              justifyContent: 'center',
              backgroundColor: '#4bc0de',
              borderRadius: 90,
              width: 320,
              height: 50,
              margin: 10,
            }}
          >
            <Text style={{alignSelf: 'center', fontSize: 20}}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('registering')}
            style={{
              justifyContent: 'center',
              backgroundColor: '#4bc0de',
              borderRadius: 90,
              width: 320,
              height: 50,
              margin: 10,
            }}
          >
            <Text style={{alignSelf: 'center', fontSize: 20}}>
              Register
            </Text>
          </TouchableOpacity>

          <Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text>
          <Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text>
          <Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text>
          <Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text>
          <Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text>
          <Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text>
          <Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text><Text style={{fontSize: 25, color: '#696969', margin: 25}}>
            Login Screen
          </Text>

        </View>
      </ScrollView>
    );
  }
}

// Skip this line if using React Native App
AppRegistry.registerComponent (`propstate`, () => Login);
