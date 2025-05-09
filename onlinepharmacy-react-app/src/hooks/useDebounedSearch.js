import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export default function useDebouncedSearch(callback, delay = 300) {
  const [query, setQuery] = useState('');

  // wrap callback in debounce
  const debounced = debounce(value => {
    callback(value);
  }, delay);

  useEffect(() => {
    if (query !== '') debounced(query);
    return () => debounced.cancel();
  }, [query, debounced]);

  return [query, setQuery];
}
