import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  startAt,
  endAt,
} from "firebase/firestore";

const useMedicineSearch = (searchTerm) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMedicines = useCallback(
    debounce(async (term) => {
      if (!term) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const col = collection(db, "medicines");
        const q = query(
          col,
          orderBy("name"),
          startAt(term),
          endAt(term + "\uf8ff")
        );
        const snapshot = await getDocs(q);
        const meds = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setResults(meds);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }, 300),
    []
  );

  useEffect(() => {
    fetchMedicines(searchTerm.toLowerCase());
  }, [searchTerm, fetchMedicines]);

  return { results, loading };
};

export default useMedicineSearch;
