import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCookieState = (cookieKey: string, defaultValue: any) => {
  // Read the initial state from the cookie or use the default value
  const [state, setState] = useState(() => {
    const cookieValue = Cookies.get(cookieKey);
    return cookieValue !== undefined ? JSON.parse(cookieValue) : defaultValue;
  });

  // Update the cookie whenever the state changes
  useEffect(() => {
    Cookies.set(cookieKey, JSON.stringify(state));
  }, [cookieKey, state]);

  return [state, setState];
};

export default useCookieState;
