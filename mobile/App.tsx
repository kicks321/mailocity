import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text} from 'react-native';

export default function App() {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button title="Increment" onPress={() => setCounter(counter + 1)}/>
      <Text>{counter}</Text>
      <Button title="Decrement" onPress={() => setCounter(counter - 1)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
