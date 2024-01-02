import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Home React Native!</Text>
      <TextInput style={{ backgroundColor: '#c5c5c5', width:100}}></TextInput>
      <Button title="Click Me!" onPress={() => alert('Button clicked!')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home