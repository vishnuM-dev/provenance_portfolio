'use client';

import { useState } from 'react';
import LoadingScreen from './ui/LoadingScreen/LoadingScreen';

export default function ClientWrapper({ children }) {
  // Start with showLoader=true. The LoadingScreen will call onExited
  // when its fade-out finishes, which sets showLoader=false.
  // We never rely on SSR for this state — the loading screen is
  // purely a client-side intro, and children render beneath it always.
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && (
        <LoadingScreen onExited={() => setShowLoader(false)} />
      )}
      {children}
    </>
  );
}
