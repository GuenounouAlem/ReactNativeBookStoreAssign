import React from 'react';
import { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import NativeWind from 'nativewind';
import books from '../Data/books.js'; // Adjust the path if necessary

export default function BookPage() {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };
  const removeFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
   <View className='flex-1 bg-white'>
    <ScrollView className='flex-1 bg-gray-800 p-4'>
      {books.map((book) => (
        <View key={book.id} className='bg-gray-500 p-4 mb-4 rounded-lg'>
          <Image
            source={book.image}
            className='w-full h-48 mb-4'
            resizeMode="cover"
          />
          <Text className='text-xl font-bold mb-2'>{book.title}</Text>
          <Text className='text-lg text-gray-300'>${book.price.toFixed(2)}</Text>
          <Button title="Add to Cart" onPress={() => addToCart(book)} color="#f0ad4e" />
        </View>
      ))}
    </ScrollView>
    <TouchableOpacity
        className='absolute bottom-10 right-10 bg-yellow-500 p-4 rounded-full shadow-lg'
        onPress={() => setModalVisible(true)}
      >
        <Text className='NativeWind`text-white text-lg'>🛒</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className='flex-1 justify-center items-center bg-black bg-opacity-50'>
          <View className='bg-white p-6 rounded-lg w-11/12'>
            <Text className='text-xl font-bold mb-4'>Your Cart</Text>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <View key={index} className='flex-row justify-between mb-2'>
                  <Text>{item.title}</Text>
                  <Text>${item.price.toFixed(2)}</Text>
                  <Button title="Remove" onPress={() => removeFromCart(item.id)} color="#dc3545" />
                </View>
              ))
            ) : (
              <Text className='text-gray-500'>Your cart is empty</Text>
            )}
            <>
            <Button title="Clear Cart" onPress={clearCart} color="#f0ad4e" />
            <Button title="Close" onPress={() => setModalVisible(false)} color="#f0ad4e" />
            {cart.length > 0 && <Button title="Confirm Purchase" onPress={() => alert('Purchase Confirmed!')} color="#28a745" />}
            </>
          </View>
        </View>
      </Modal>
    </View> 
  );
}
