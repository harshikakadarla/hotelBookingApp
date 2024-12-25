import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
  const { hotelName, pricePerNight, address } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <Text style={styles.hotelInfo}>Hotel: {hotelName}</Text>
      <Text style={styles.hotelInfo}>Price Per Night: ₹{pricePerNight}</Text>
      <Text style={styles.hotelInfo}>Address: {address}</Text>

      <TextInput style={styles.input} placeholder="Card Holder Name" />
      <TextInput style={styles.input} placeholder="Card Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Expiry Date (MM/YY)" />
      <TextInput style={styles.input} placeholder="CVV" keyboardType="numeric" secureTextEntry />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  hotelInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
