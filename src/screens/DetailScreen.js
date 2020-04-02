import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const DetailScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  
  const blogPost = state.find((post) => post.id === navigation.getParam('id'));
  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

DetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity 
        onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
        <FontAwesome style={styles.header} name="pencil" size={30}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    marginRight: 30,
  },
});

export default DetailScreen;
