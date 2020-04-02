import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity 
                onPress={() => {navigation.navigate('Detail', {id: item.id})
              }}>
                  <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name='trash' />
              </TouchableOpacity>
            </View>
          )
        }}
        />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather style={styles.header} name="plus" size={30}/>
      </TouchableOpacity>
  )};
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  header: {
    marginRight: 30,
  }
});

export default IndexScreen;
