import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const image = 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D';

const HotelDetailsScreen = ({ route, navigation }) => {
  const { hotel } = route.params;

  const navigateToPayment = () => {
    navigation.navigate('Payment', {
      hotelName: hotel.name,
      pricePerNight: hotel.pricePerNight,
      address: hotel.address,
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.hotelName}>{hotel.name}</Text>
      <Text style={styles.hotelPlace}>{hotel.address}</Text>
      <Text style={styles.details}>{hotel.aboutThePlace}</Text>
      <View style={[styles.filterScrollToMenuStyle, { justifyContent: 'space-around', alignContent: 'center' }]}>
        <Text style={styles.hotelPlace}>Rating: {hotel.rating}</Text>
        <Text style={styles.hotelPlace}>Price Per Night: ₹{hotel.pricePerNight}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={navigateToPayment}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  filterScrollToMenuStyle: {
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hotelPlace: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 30,
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

export default HotelDetailsScreen;
