// ChatWindow.tsx
import React, { useState } from 'react';
import CommingSoonv2 from '../../CommingSoon/CommingSoonv2';
const ChatWindow: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="">
      <CommingSoonv2/>
     
    </div>
  );
};

export default ChatWindow;
