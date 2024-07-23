import { Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput, Button, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.titleContainer}>
      <TextInput
        style={styles.input}
        onChangeText={() => console.log("onChangeText")}
        value={"Username"}
      />
      <TextInput
        style={styles.input}
        onChangeText={() => console.log("onChangeNumber")}
        value={"number"}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => ""}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    gap: 0,
    height: "100%"
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    width: "80%",
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});
