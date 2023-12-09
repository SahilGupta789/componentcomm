
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('Hello from parent');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <p>{message}</p>
      <Child onMessageChange={handleMessageChange} />
    </div>
  );
};

export default Parent;
