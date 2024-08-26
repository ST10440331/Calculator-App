import React, { useState } from 'react'; 
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet
} from 'react-native'; 

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddition = () => {
    let ans = Number(number1) + Number(number2);
    setAnswer(ans);
  };

  const handleSubtraction = () => {
    let ans = Number(number1) - Number(number2);
    setAnswer(ans);
  };

  const handleMultiply = () => {
    let ans = Number(number1) * Number(number2);
    setAnswer(ans);
  };

  const handleDivide = () => {
    if (Number(number2) === 0) {
      setAnswer('Cannot divide by zero');
    } else {
      let ans = Number(number1) / Number(number2);
      setAnswer(ans);
    }
  };

  const handlePower = () => {
    let ans = Math.pow(Number(number1), Number(number2));
    setAnswer(ans);
  };

  const handleSquare = () => {
    let ans = Math.pow(Number(number1), 2);
    setAnswer(ans);
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.heading}>Basic Calculator</Text>
      <View style={styles.inputContainer}> 
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Number 1'
          value={number1}
          onChangeText={setNumber1}
        />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Number 2'
          value={number2}
          onChangeText={setNumber2}
        />
      </View>
      <View style={styles.operatorsContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddition}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subtractButton} onPress={handleSubtraction}>
          <Text>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.multiplyButton} onPress={handleMultiply}>
          <Text>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.divideButton} onPress={handleDivide}>
          <Text>Divide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.powerButton} onPress={handlePower}>
          <Text>To The Power Of</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton} onPress={handleSquare}>
          <Text>Square</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.answerContainer}>
        <Text>{answer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,    	
  },
  heading: {
    fontSize: 24, 
    marginBottom: 10, 
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  }, 
  operatorsContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginVertical: 10,
    flexWrap: 'wrap', // To handle overflow on smaller screens
  }, 
  answerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20,
  }, 
  input: {
    flex: 1, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal: 10, 
    marginHorizontal: 5,
  },
  addButton: {
    width: 70, 
    height: 40, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5,
  },
  subtractButton: {
    width: 70, 
    height: 40, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5,
  },
  multiplyButton: {
    width: 70, 
    height: 40, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5,
  },
  divideButton: {
    width: 70, 
    height: 40, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5,
  },
  powerButton: {
    width: 70, 
    height: 40, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5,
  },
  squareButton: {
    width: 70, 
    height: 40, 
    backgroundColor: '#4CAF50',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 5,
  }
});

export default App;
