import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer , useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// --- Main screens ---

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home</Text>
      {/* <Button 
        title='Sign Up'
        onPress={()=> navigation.navigate('SignUp')}
      /> */}
    </View>
  )
}

const FeedScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Feeds</Text>
      {/* <Button 
        title='Sign Up'
        onPress={()=> navigation.navigate('SignUp')}
      /> */}
    </View>
  )
}

const CatalogScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog</Text>
      {/* <Button 
        title='Sign Up'
        onPress={()=> navigation.navigate('SignUp')}
      /> */}
    </View>
  )
}

const AccountScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Account</Text>
      {/* <Button 
        title='Sign Up'
        onPress={()=> navigation.navigate('SignUp')}
      /> */}
    </View>
  )
}

const MainNavigator = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feeds" component={FeedScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

// --- Onboarding screens ---

const SigninScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign in</Text>
      <Button 
        title='Sign Up'
        onPress={()=> navigation.navigate('SignUp')}
      />
    </View>
  )
}

const SignUpScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up</Text>
      <Button 
        title='Continue'
        onPress={()=> navigation.navigate('Main')}
      />
    </View>
  )
}


// --- App ---

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
