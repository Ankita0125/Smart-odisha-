
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ScheduleScreen = () => {
  const [inputText, setInputText] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };
  const handleInputChange2 = (text) => {
    setInputText2(text);
  };


  const handleButtonPress = () => {
    if (inputText.trim() !== '') {
      const data = { input: inputText };
  
      fetch('https://6b26-2405-201-d046-4020-8052-e9a3-c940-261f.ngrok-free.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => {
          // Process the response data here
          setOutputText(responseData.message);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputText}
        placeholder="Enter input"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange2}
        value={inputText2}
        placeholder="Enter input"
      />
      <Button title="Submit" onPress={handleButtonPress} />
      <Text style={styles.output}>NUMBER OF TRUCKS {outputText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  output: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default ScheduleScreen;
