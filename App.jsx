/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  Linking,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Postcode from './components/postcodeSearch';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>UK Air Pollution Checker</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.textSubHeader}>
              Discover the Air You Breathe
            </Text>
            <Text style={styles.text}>
              Welcome to our air pollution checking app, where you can stay
              informed about the air quality in your area. We believe that
              knowledge is power when it comes to your health and well-being.
              With our app, you can effortlessly access real-time air pollution
              data and make informed decisions to protect yourself and your
              loved ones. Whether you're concerned about allergies, respiratory
              issues, or simply want to stay informed, our app is your reliable
              companion.
            </Text>
            <Text style={styles.textSubHeader}>
              Stay Informed, Stay Healthy!
            </Text>
          </View>
          <View>
            <Postcode />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20',
  },
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'start',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 20,
  },
  textHeader: {
    color: '#ffffff',
    fontSize: 40,
    margin: 10,
  },
  textSubHeader: {
    color: '#000000',
    fontSize: 30,
    margin: 20,
  },
});

export default App;
