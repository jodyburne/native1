import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostform from './BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((post) => post.id === id);
  
  return (
    <BlogPostform 
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}/>  
  )
};



const styles = StyleSheet.create({

});

export default EditScreen;