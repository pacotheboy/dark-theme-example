import React, {useState} from 'react';
import { StatusBar, Switch, StyleSheet, Text, View } from 'react-native';


const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };


  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.row}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </Text>
      <View style={{ height: 150, width: '100%', backgroundColor: isDarkMode ? '#045C4F' : '#87CEEB' }} />
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 16 
  },
  rectangle: {
    height: 208,
    width: '100%',
    backgroundColor: '#87CEEB',
  },
});