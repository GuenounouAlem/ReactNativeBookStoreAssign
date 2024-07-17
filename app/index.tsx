import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';

function LogoTitle() {
  return (
  <View style = {styles.container} >
    <Image style={styles.image} source={require('../Public/pngwing')} />
  </View>    
  );
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <Text>Welcome to our Book Store</Text>
      <Link href={{ pathname: 'books', params: { name: 'Book Store' } }}>Go to Book Store</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
