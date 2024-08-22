import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen({ onRestart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Image
        source={require('../assets/images/gameover.png')}
        style={styles.image}
      />
      <PrimaryButton onPress={onRestart}>Play Again</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff4d4d',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default GameOverScreen;
