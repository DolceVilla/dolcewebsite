




import React, { useState, useRef, useEffect } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane, FaRegHandPaper, FaUserCircle, FaRobot } from "react-icons/fa";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "👋 Hi! Say hello to start." }]);
  const [userMessage, setUserMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formInput, setFormInput] = useState({ name: "", number: "", email: "" });
  const chatBodyRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (from, text) => setMessages(prev => [...prev, { from, text }]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    addMessage("user", userMessage);

    if (userMessage.toLowerCase().includes("hello")) {
      setTimeout(() => addMessage("bot", "Hello 👋 What do you want to know?"), 500);
    } else if (!showForm) {
      setTimeout(() => {
        addMessage("bot", "Hey there, please leave your details so we can contact you even if you are no longer on the site.");
        setShowForm(true);
      }, 500);
    }

    setUserMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formInput.name || !formInput.number || !formInput.email) {
      alert("Please fill all fields!");
      return;
    }

    addMessage("user", `Name: ${formInput.name}, Number: ${formInput.number}, Email: ${formInput.email}`);
    addMessage("bot", "✅ Thank you! We’ll contact you soon.");
    setFormInput({ name: "", number: "", email: "" });
    setShowForm(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center">
      
      {/* "We are here" with hand icon */}
      {!isOpen && (
        <div className="flex items-center gap-2 mb-2 animate-bounce">
          <span className="bg-gold text-white px-3 py-1 rounded-full shadow-lg font-semibold text-sm">
            We are here
          </span>
          <div className="bg-black p-2 rounded-full shadow-lg">
            <FaRegHandPaper size={20} className="text-white" />
          </div>
        </div>
      )}

      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-gold p-4 rounded-full shadow-lg text-white hover:bg-black transition-colors relative"
        >
          <FaCommentDots size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden mt-2">
          
          {/* Header */}
          <div className="bg-gold text-white p-3 flex justify-between items-center">
            <h2 className="font-bold text-sm">Chat with our Assistant</h2>
            <button onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50"
            ref={chatBodyRef}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.from === "bot" && <FaRobot size={28} className="bg-gold" />}
                <div
                  className={`p-2 rounded-lg max-w-[70%] text-sm ${
                    msg.from === "user" ? "bg-gold text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.from === "user" && <FaUserCircle size={28} className="text-gray-500" />}
              </div>
            ))}

            {/* Form Section */}
            {showForm && (
              <form onSubmit={handleFormSubmit} className="mt-3 flex flex-col gap-2 bg-white p-2 rounded border">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formInput.name}
                  onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
                  className="border px-2 py-1 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Your Number"
                  value={formInput.number}
                  onChange={(e) => setFormInput({ ...formInput, number: e.target.value })}
                  className="border px-2 py-1 rounded text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formInput.email}
                  onChange={(e) => setFormInput({ ...formInput, email: e.target.value })}
                  className="border px-2 py-1 rounded text-sm"
                />
                <button
                  type="submit"
                  className="bg-gold text-white py-1 rounded text-sm hover:bg-black"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Always visible input */}
          <form onSubmit={handleSendMessage} className="p-2 flex items-center gap-2 border-t bg-white">
            <input
              type="text"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button type="submit" className="bg-gold text-white p-2 rounded hover:bg-black">
              <FaPaperPlane className="" size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
