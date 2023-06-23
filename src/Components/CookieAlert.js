import React, { useState, useEffect } from 'react';

const CookieAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowAlert(false);
  };

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    setShowAlert(!hasConsent);
  }, []);

  if (!showAlert) {
    return null;
  }

  return (
    <div className="cookie-alert">
      <p>This website uses cookies to improve your experience. By using our site, you acknowledge that you have read and understand our <a href="/privacy">Privacy Policy</a>.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieAlert;
