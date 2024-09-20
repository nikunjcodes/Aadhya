import { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleMessageSend = () => {
    const botResponse = "Welcome! How can I assist you in booking a museum ticket?";
    setResponse(botResponse);
    setMessage(''); // Clear the input after sending
  };

  return (
    <div className="container mx-auto mt-10 bg-[#EDE6D2] p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-serif font-bold text-[#704214]">Chat with our Virtual Assistant</h1>
      <p className="mt-2 text-[#3D3D3D]">Ask any questions about museums, ticket bookings, or facilities!</p>
      <div className="mt-6">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question..."
          className="border-2 border-[#8B5E3C] rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#C2B280]"
        />
        <button 
          onClick={handleMessageSend} 
          className="mt-2 bg-[#8B5E3C] text-white p-2 rounded-lg hover:bg-[#704214] transition duration-300"
        >
          Send Message
        </button>
      </div>
      <div className="mt-6 p-4 bg-[#F5F5F5] rounded-lg border border-[#8B5E3C]">
        <p className="text-[#3D3D3D]">{response}</p>
      </div>
    </div>
  );
};

export default Chatbot;
