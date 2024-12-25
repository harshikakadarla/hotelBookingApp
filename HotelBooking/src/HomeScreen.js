import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const host_api_url = 'https://hotels-api-4ltr.onrender.com/api/hotels'; 

export default function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  });

  const fetchHotels = async () => {
    try {
      const response = await fetch(host_api_url);
      const data = await response.json();
      // console.log('data', data)
      setHotels(data);
      setFilteredHotels(data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = hotels.filter((hotel) =>
        (hotel.name.toLowerCase().includes(text.toLowerCase()) || hotel.address.toLowerCase().includes(text.toLowerCase()))
      );
      setFilteredHotels(filtered);
    } else {
      setFilteredHotels(hotels);
    }
  };

  const renderHotelItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('HotelDetails', { hotel: item })}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelPlace}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by hotel name or place"
        value={searchText}
        onChangeText={handleSearch}
        clearButtonMode="always"
      />
      <FlatList
        data={filteredHotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderHotelItem}
      />
      {/* <Text>Hello</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  searchBar: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
    elevation: 2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hotelPlace: {
    fontSize: 14,
    color: '#777',
  },
});
