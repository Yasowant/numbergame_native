import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: '#b56576' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonInnerContainer: {
    backgroundColor: '#b56576',
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2,
    borderRadius: 28,
  },
  buttonText: {
    color: '#f8edeb',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
