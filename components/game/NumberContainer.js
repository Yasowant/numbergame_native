import { View, Text, StyleSheet } from 'react-native';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#4CAF50', // Green border
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  number: {
    fontSize: 36,
    color: '#4CAF50', // Green text
    fontWeight: 'bold',
  },
});
