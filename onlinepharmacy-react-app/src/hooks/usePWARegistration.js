import { useEffect } from 'react';
import { Workbox } from 'workbox-window';

export default function usePWARegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/service-worker.js');
      wb.addEventListener('installed', event => {
        if (event.isUpdate) {
          // prompt user to refresh for new content
          if (window.confirm('New version available. Reload now?')) {
            window.location.reload();
          }
        }
      });
      wb.register();
    }
  }, []);
}
