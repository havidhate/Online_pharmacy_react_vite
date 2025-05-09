import { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  query as buildQuery,
  where,
  onSnapshot,
  orderBy,
  limit
} from 'firebase/firestore';
import { firebaseApp } from '../services/firebase';

export default function useFirestoreQuery(
  colName,
  constraints = [],    // e.g. [where('price', '<', 1000)]
  order = null,         // e.g. ['price', 'asc']
  maxResults = null     // integer
) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    let q = buildQuery(collection(db, colName), ...constraints);
    if (order)    q = buildQuery(q, orderBy(order[0], order[1]));
    if (maxResults) q = buildQuery(q, limit(maxResults));

    const unsub = onSnapshot(
      q,
      snap => {
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setData(docs);
        setLoading(false);
      },
      err => {
        console.error('Firestore error:', err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [colName, JSON.stringify(constraints), order, maxResults]);

  return { data, loading };
}
