// components/LoadingOverlay.js

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <Image src="/assets/loading.gif" fill priority alt="Loading" />
      </div>
    );
  }

  return null;
};
