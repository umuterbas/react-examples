import axios from 'axios';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

import { database } from '../../firebase-config';

const postsCollectionRef = collection(database, 'posts');

const postsService = {
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  },
  getFromFirebase: async (userId) => {
    try {
      if (userId) {
        const q = query(postsCollectionRef, where('userId', '==', userId));
        const response = await getDocs(q);
        const parseDocs = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(parseDocs);
        return parseDocs;
      }
      return [];
    } catch (error) {
      console.log('error', error);
    }
  },
  post: async (post) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
    return response.data;
  },
  postToFirebase: async (post) => {
    const response = await addDoc(postsCollectionRef, post);
    return { ...post, id: response.id };
  },
  delete: async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (response.status === 200) {
      // status OK
      return id;
    }
  },
  deleteFromFirebase: async (id) => {
    const postRef = doc(database, 'posts', id);
    await deleteDoc(postRef);
    return id;
  },
  update: async (post) => {
    console.log('post', post);
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    console.log('data', response);
    return post;
  },
  updateInFirebase: async (post) => {
    const postRef = doc(database, 'posts', post.id);
    const response = await updateDoc(postRef, {
      body: post.body,
      title: post.title,
    });
    console.log('res', response);
    return post;
  },
};

export default postsService;
