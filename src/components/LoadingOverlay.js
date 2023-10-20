// components/LoadingOverlay.js

import React, { useState } from 'react';
import Image from 'next/image';

export const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="loading-overlay ">
        <Image
          src="/assets/loading.gif"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
          alt="Loading"
        />
      </div>
    );
  }

  return null;
};
