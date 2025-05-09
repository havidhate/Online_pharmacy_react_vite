import { db } from './firebase';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import axios from 'axios';

export const fetchMedicines = async (filters = {}) => {
  let q = collection(db, 'medicines');
  const constraints = [];

  if (filters.search)
    constraints.push(where('name', '>=', filters.search));
  if (filters.category?.length)
    constraints.push(where('category', 'in', filters.category));
  if (filters.brand?.length)
    constraints.push(where('brand', 'in', filters.brand));
  if (filters.price)
    constraints.push(where('price', '>=', filters.price[0]),
                     where('price', '<=', filters.price[1]));

  if (constraints.length) q = query(q, ...constraints);
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const getMedicineById = async (id) => {
  const docRef = doc(db, 'medicines', id);
  const snap = await getDoc(docRef);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const fetchAIRecommendations = async () => {
  // expects aiClient.post('/recommendations') to return [{id,name,image},…]
  const { data } = await axios.post(
    process.env.REACT_APP_AI_API_URL + '/recommendations'
  );
  return data;
};
