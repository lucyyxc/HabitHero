import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MonthScreen from './app/screens/MonthScreen';
import { database } from './app/db/index';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null, // will change to random motivational message
    };
    // this.renderStars = this.renderStars.bind(this);
  }

  // change to useEffect
  componentDidMount() {
    // database.getStars();
    // database.setUpDatabase();
  }

  // renderStars() {
  //   database.getStars();
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen
            name='Month'
            component={MonthScreen}
            // renderStars={this.renderStars}
          />
        </Stack.Navigator>
        {/* <WelcomeScreen /> */}
      </NavigationContainer>
    );
  }
}
