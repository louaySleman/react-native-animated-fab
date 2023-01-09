import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import Fab from './components/Fab';
import {data} from './static/data';
import {styles} from './styles';

const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const renderItem = ({item}: {item: any}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={data} renderItem={renderItem} />
      <Fab isVisible={isVisible} />
    </SafeAreaView>
  );
};

export default App;
