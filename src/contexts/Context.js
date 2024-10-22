import { createContext, useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore"; 
import { db, auth } from '../services/firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

const Context = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      if (userId) {
        const todosCollection = collection(db, "todos");
        const todoSnapshot = await getDocs(todosCollection);
        const todoList = todoSnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(todo => todo.userId === userId);

        setTodos(todoList);
      }
    };

    fetchTodos();
  }, [userId]); 

  const addTodo = async (todo) => {
    if (userId) {
      const todoWithUserId = { ...todo, userId };
      try {
        const docRef = await addDoc(collection(db, "todos"), todoWithUserId);
        setTodos(prevTodos => [...prevTodos, { id: docRef.id, ...todoWithUserId }]);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const removeTodo = async (id) => {
    try {
      const todoRef = doc(db, "todos", id);
      await deleteDoc(todoRef);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  const updateTodo = async (updatedTodo) => {
    if (userId) {
      const todoRef = doc(db, "todos", updatedTodo.id);
      
      try {
        await setDoc(todoRef, {
          taskName: updatedTodo.taskName,
          status: updatedTodo.status,
          priority: updatedTodo.priority,
          taskDescription: updatedTodo.taskDescription,
          comments: updatedTodo.comments || [],
        }, { merge: true });

        setTodos(prevTodos => prevTodos.map(todo => 
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
        ));
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    }
  };

  return (
    <Context.Provider value={{ todos, addTodo, removeTodo, updateTodo, userId }}> 
      {children}
    </Context.Provider>
  );
  
};

export default Context;



