import { useState, useEffect } from 'react';

export default function PromoBanner() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div style={{ 
      background: '#ff4d4d', 
      color: 'white', 
      padding: '15px', 
      textAlign: 'center',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ margin: 0 }}>🔥 АКЦІЯ ДНЯ!</h2>
      <p style={{ fontSize: '1.1em', margin: '5px 0' }}>
        Встигніть купити книгу <strong>"React для початківців"</strong> зі знижкою 50%!
      </p>
      <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
        До кінця пропозиції: {seconds} сек
      </div>
    </div>
  );
}