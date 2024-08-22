import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberInputHandeler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandeler() {
    setEnteredNumber('');
  }

  function confirmInputHandeler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Please enter a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandeler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandeler}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInputHandeler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandeler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    marginTop: 100,
    backgroundColor: '#3b3b3b',
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    fontSize: 36,
    borderBottomColor: '#f0a500',
    borderBottomWidth: 3,
    color: '#f0a500',
    marginVertical: 12,
    fontWeight: 'bold',
    width: 60,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonSpacing: {
    marginHorizontal: 8,
  },
});
