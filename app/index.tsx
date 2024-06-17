import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require("/padaria/pag_inicial/src/image/fundo.jpg")} style={styles.ImageBackground}>
      <View style={styles.textContainer}>
        <Text style={styles.Text}>TEXTO
          <Image source={require("/padaria/pag_inicial/src/image/Fresh beef burger isolated -1.jpg")} style={styles.Image}/>
        </Text>
        <Text style={styles.Text}>TEXTO
          <Image source={require("/padaria/pag_inicial/src/image/fritas.png")} style={styles.Image}/>
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("/padaria/pag_inicial/src/image/home icon.jpg")} style={styles.Image2}></Image>
        <Image source={require("/padaria/pag_inicial/src/image/logo.png")} style={styles.Image2}></Image>
        <Image source={require("/padaria/pag_inicial/src/image/carrinho icon.png")} style={styles.Image2}></Image>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  Text: {
    textAlign: 'center',
    fontSize: 'xx-large',
    color: 'red',
  },
  Image: {
    width: 100,
    height: 100,
  },
  Image2: {
    width: 50,
    height: 50,
  },
});

export default App;
