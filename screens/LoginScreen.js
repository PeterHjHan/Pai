import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Button } from 'react-native';




export default class LoginScreen extends React.Component {
  static navigationOptions = {
    // Here we can change the title at the top of the page
    title: 'Login',
  };

  constructor(props) {
    super(props);

  }

  render() {

    return (

 
      <View style={styles.page}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')}>
        <Image
      source={require('../assets/images/pai_logo.png')}
      style={ styles.logo }
      />
          <Image
            source={{uri: 'https://mbtskoudsalg.com/images/login-with-facebook-button-png-1.png'}}
            style={styles.fblogin}
          />
        </TouchableOpacity>
        <View style={styles.switch}>
            <Button
            onPress={this.props.screenProps.changeToUserTwo}
            title="Brennan"
            color="blue"
            />
            <Button
            onPress={this.props.screenProps.changeToUserOne}
            title="User 1"
            color="blue"
            />

            <Button
            onPress={this.props.screenProps.changeToUserFour}
            title="User 4"
            color="blue"
            />

            <Button
            onPress={this.props.screenProps.changeToUserThree}
            title="Gaurav"
            color="blue"
            />
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedLogo: {
    fontSize: 40,
  },
  fblogin: {
    height: 150,
    width: 300,
  },
  switch: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logo: {
    width: 250, 
    height: 250,
    alignSelf:'center',
  }

});
