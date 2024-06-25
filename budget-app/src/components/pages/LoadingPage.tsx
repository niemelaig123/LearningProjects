import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const [counter, setCounter] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([false, false, false, false]);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  // Function to simulate API call
  const fetchApiStatus = async () => {
    // Replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000); // Simulating a positive API response
    });
  };

  useEffect(() => {
    if (counter >= 12) {
      // Stop the interval
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      // Make API call and navigate based on the response
      fetchApiStatus().then((status) => {
        if (status) {
            navigate('/home');
        } else {
            navigate('/failure');
        }
        // Reset the counter and visibility after navigation
        setCounter(0);
        setVisibleMessages([false, false, false, false]);
      });
      return;
    }

    // Start the interval
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 3);
    }, 3000);

    // Update the visibility of messages
    setVisibleMessages((prevMessages) => {
      const index = counter / 3;
      if (index < prevMessages.length) {
        const newMessages = [...prevMessages];
        newMessages[index] = true;
        return newMessages;
      }
      return prevMessages;
    });

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [counter, history]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {visibleMessages[0] && <p>Loading part 1...</p>}
      {visibleMessages[1] && <p>Loading part 2...</p>}
      {visibleMessages[2] && <p>Loading part 3...</p>}
      {visibleMessages[3] && <p>Finalizing...</p>}
    </div>
  );
};

export default LoadingPage;
