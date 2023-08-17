// components/LoadingOverlay.js

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <Image
          src="/assets/loading.gif"
          width={1000}
          height={1000}
          layout="responsive"
          priority
          alt="Loading"
        />
      </div>
    );
  }

  return null;
};
