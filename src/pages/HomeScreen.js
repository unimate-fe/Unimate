import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/unimate_logo.png')}
        style={{marginVertical: 10}}
      />
      <Image
        source={require('../assets/start_logo.png')}
        style={{marginVertical: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
