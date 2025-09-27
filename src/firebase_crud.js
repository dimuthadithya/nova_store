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

export { addPhone, getProductsByCategory, addNewCategory, getAllCategories };
