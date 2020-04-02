import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostform = ({onSubmit, initialValues}) => {
  const [ title, setTitle ] = useState(initialValues.title);
  const [ content, setContent ] = useState(initialValues.content);

    return (
        <View>
          <Text style={styles.label}> Enter Title: </Text>
          <TextInput 
            style={styles.input}
            value={title}
            onChangeText={newTitle => setTitle(newTitle)}/>
          <Text style={styles.label}>Enter Content: </Text>
          <TextInput 
            style={styles.input}
            value={content}
            onChangeText={newContent => setContent(newContent)}/>
          <Button
            title='Save blog post'
            onPress={() => onSubmit(title, content)}/>
        </View>
      );
};

BlogPostform.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 5,
    },
    label: {
    fontSize: 20, 
    marginBottom: 5,
    marginLeft: 5,
    },
});

export default BlogPostform;

