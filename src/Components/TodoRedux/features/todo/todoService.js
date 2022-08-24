import axios from 'axios';
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

import { database } from '../../../BlogPosts/firebase-config';

const tasksCollectionRef = collection(database, 'tasks');

const todoService = {
  get: async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todosaaa');
  },
  getFromFirebase: async (userId) => {
    if (!userId) {
      return await getDocs(tasksCollectionRef);
    } else {
      const q = query(tasksCollectionRef, where('userId', '==', userId));
      const result = await getDocs(q);
      return result;
    }
  },
  addToFirebase: async (task) => {
    const response = await addDoc(tasksCollectionRef, task);
    return { ...task, id: response.id };
  },
  removeFromFirebase: async (id) => {
    const taskDocumentRef = doc(database, 'tasks', id);
    await deleteDoc(taskDocumentRef);
    return id;
  },
};

export default todoService;
