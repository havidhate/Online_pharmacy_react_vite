import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore';

export const createOrder = async (order) => {
  const col = collection(db, 'orders');
  const docRef = await addDoc(col, {
    ...order,
    status: 'Processing',
    createdAt: new Date(),
  });
  return docRef.id;
};

export const fetchOrderHistory = async (userId) => {
  const q = query(
    collection(db, 'orders'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const trackOrder = (orderId, callback) => {
  const docRef = doc(db, 'orders', orderId);
  return onSnapshot(docRef, snap => {
    if (snap.exists()) callback({ id: snap.id, ...snap.data() });
  });
};

export const updateOrderStatus = async (orderId, status) => {
  const docRef = doc(db, 'orders', orderId);
  await updateDoc(docRef, { status });
};
