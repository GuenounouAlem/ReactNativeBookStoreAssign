import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


export default function HomeScreen() {
  
    const [cart, setCart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
  
    const addToCart = (book) => {
      setCart([...cart, book]);
    };
    
  return (
    <View className = 'flex-1 bg-gray-800 justify-center items-center'>
      <Image
        source={require('../Public/books.jpg')} // Replace with your image path
        className = 'w-60 h-60 mb-8'
        resizeMode="contain"
      />
      <Text className = 'text-4xl text-yellow-500 mb-4'>
        Welcome to Our Book Store
      </Text>
      <TouchableOpacity className = 'bg-yellow-500 px-4 py-2 rounded'>
        <Link href="/books" className = 'text-white text-lg'>
          Get Started
        </Link>
      </TouchableOpacity>
    </View>
  );
}
