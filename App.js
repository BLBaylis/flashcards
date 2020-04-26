import React, {Component} from 'react';
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import LandingScreen from './components/LandingScreen';
import HomeScreen from './components/HomeScreen';
import CreateDeckScreen from './components/CreateDeckScreen';
import {handleInitialData} from './actions'

const Tab = createBottomTabNavigator();

class App extends Component {

  state = {
    userPressedStart: false, //change to false for production
    loading: true
  }

  componentDidMount() {
    this.props.handleInitialData().then(() => this.setState({ loading: false }))
  }

  goToHome = () => this.setState({ userPressedStart: true })

  render() {
    const userPressedStart = this.state.userPressedStart
    if (this.state.loading) {
      return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }
    return userPressedStart ? (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName = 'Home'
          activeColor = 'purple'
          style={{backgroundColor: 'purple'}}
          tabBarOptions = {{
            activeTintColor: 'purple',
            inactiveTintColor: 'purple',
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}  
            options = {{
              tabBarIcon: () => <Ionicons size = {30} name = 'md-home' color = {'purple'}/>
            }}
          />
          <Tab.Screen 
            name="Create Deck" 
            component={CreateDeckScreen} 
            options = {{
              tabBarIcon: () => <MaterialIcons size = {35} name = 'add' color = {'purple'}/>
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    ) : <LandingScreen goToHome = {this.goToHome}/>
  }
  
}

export default connect(null, {handleInitialData})(App);