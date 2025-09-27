import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  where,
  query,
} from 'firebase/firestore';

const productCollection = collection(db, 'products');

const addPhone = async (phone) => {
  try {
    const docRef = await addDoc(productCollection, phone);
    return docRef.id;
  } catch (err) {
    console.error(err);
  }
};

const getProductsByCategory = async (category) => {
  let q;
  if (category) {
    q = query(productCollection, where('category', '==', `${category}`));
  } else {
    q = query(productCollection);
  }

  const snapshot = await getDocs(q);
  const phones = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return phones;
};

const addNewCategory = async (category) => {
  try {
    const docRef = await addDoc(collection(db, 'categories'), {
      name: category.name,
      desciption: category.description,
    });
    return docRef.id;
  } catch (err) {
    console.error(err);
  }
};

const getAllCategories = async () => {
  const snapshot = await getDocs(collection(db, 'categories'));
  const categories = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return categories;
};

const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, 'products', id));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const deleteCategory = async (id) => {
  try {
    await deleteDoc(doc(db, 'categories', id));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const updateProduct = async (id, updatedData) => {
  try {
    const productRef = doc(db, 'products', id);
    await updateDoc(productRef, updatedData);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const updateCategory = async (id, updatedData) => {
  try {
    const categoryRef = doc(db, 'categories', id);
    await updateDoc(categoryRef, updatedData);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export {
  addPhone,
  getProductsByCategory,
  addNewCategory,
  getAllCategories,
  deleteCategory,
  deleteProduct,
  updateProduct,
  updateCategory,
};
