import React, { useState, useEffect } from 'react';
import './AnimatedLoader.css';

const AnimatedLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Ukryj animowane kółko po 1 sekundzie
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    // Wyczyść timeout, aby uniknąć wycieku pamięci
    return () => clearTimeout(timeout);
  }, []); // Uruchom tylko raz po zamontowaniu komponentu

  return (
    <div className={`loader-container ${showLoader ? 'show' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default AnimatedLoader;
