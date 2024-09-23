// App.js
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../my-app/Components/CustomButton'; 
import CustomInput from '../my-app/Components/CustomInput'; 
import Grid from '../my-app/Components/Grid';
import ImageCard from '../my-app/Components/image';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [items, setItems] = useState([]);

  const handleInputSubmit = () => {
    if (name.trim() && age.trim()) { 
      setItems([...items, { name, age }]); 
      console.log('Nome:', name, 'Idade:', age);
      setName(''); 
      setAge(''); 
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ImageCard 
          imageUrl="https://avatarfiles.alphacoders.com/375/thumb-1920-375542.png" 
          imageStyle={styles.image} 
        />
        <CustomInput 
          label="Nome" 
          value={name} 
          onChangeText={setName} 
        />
        <CustomInput 
          label="Idade" 
          value={age} 
          onChangeText={setAge} 
        />
        <CustomButton 
          title="Enviar" 
          onPress={handleInputSubmit} 
        />
        <Grid items={items.map(item => `${item.name}, ${item.age} anos`)} />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    padding: 16,
  },
  image: {
    width: 200, 
    height: 200,
  },
});

export default App;
