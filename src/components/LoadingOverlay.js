// components/LoadingOverlay.js

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <Image src="/assets/loading.gif" fill priority alt="Loading" />
      </div>
    );
  }

  return null;
};
