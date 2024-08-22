import { StyleSheet, Text } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#3B82F6',
    padding: 12,
    backgroundColor: '#DBEAFE',
    borderRadius: 8,
  },
});
