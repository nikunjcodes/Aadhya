import React, { useState } from 'react';
import { ChatIcon } from '@heroicons/react/outline';
import MuseumSlider from './MuseumSlider';
import MuseumSliderNearYou from './MuseumNearYouSlider';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'Bot', text: 'Hello! How can I assist you today?' }]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { sender: 'User', text: userInput }];
    let botResponse = 'I am not sure how to respond to that.';

    if (userInput.toLowerCase().includes('ticket')) {
      botResponse = 'Sure! Which museum would you like to book tickets for?';
    } else if (userInput.toLowerCase().includes('museum')) {
      botResponse = 'We have tickets available for the National Museum and Art Gallery.';
    }

    setMessages([...newMessages, { sender: 'Bot', text: botResponse }]);
    setUserInput('');
  };

  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#4A4A4A]"> 
      <header className="bg-[#6F4C3E] p-8 rounded-b-xl shadow-lg"> 
        <h1 className="text-5xl font-serif text-center text-[#F0E4D2]">Museum Ticketing System</h1>
        <p className="text-center mt-2 text-lg text-[#F0E4D2] font-light">
          Seamless ticket booking, powered by AI Chatbot
        </p>
      </header>

      <main className="container mx-auto mt-10 text-center">
        <MuseumSlider />
        <MuseumSliderNearYou />

        <section className="mt-10 relative">
          <button
            onClick={toggleChat}
            className="fixed bottom-5 right-5 bg-[#8B5E3C] p-4 rounded-full text-white shadow-lg hover:bg-[#6F4C3E] transition-transform transform hover:scale-110"
          >
            <ChatIcon className="h-6 w-6" />
          </button>

          {isChatOpen && (
            <div className="fixed bottom-20 right-5 bg-white w-80 h-96 shadow-2xl border border-[#8B5E3C] rounded-xl overflow-hidden">
              <div className="bg-[#8B5E3C] text-white p-4 flex justify-between items-center rounded-t-xl">
                <h2 className="text-lg font-bold">Museum Chatbot</h2>
                <button onClick={toggleChat} className="text-white font-bold hover:text-gray-300">
                  X
                </button>
              </div>
              <div className="p-4 overflow-y-scroll h-72">
                <div className="text-[#4A4A4A]">
                  {messages.map((message, index) => (
                    <p key={index} className={message.sender === 'Bot' ? 'font-semibold text-[#704214]' : ''}>
                      <strong>{message.sender}:</strong> {message.text}
                    </p>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    value={userInput}
                    onChange={handleUserInput}
                    placeholder="Type your message..."
                    className="w-full p-2 border-2 border-[#8B5E3C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                  />
                  <button
                    onClick={handleSend}
                    className="mt-2 w-full bg-[#A0522D] text-white p-2 rounded-md hover:bg-[#6F4C3E] transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
