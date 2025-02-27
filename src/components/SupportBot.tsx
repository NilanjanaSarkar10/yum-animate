
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  X, 
  Send, 
  User,
  Bot,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedContainer from "./AnimatedContainer";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Sample bot responses
const botResponses = [
  "Hello! How can I help you today with your food order?",
  "I'm checking on that for you right now.",
  "You can track your order in real-time through the Orders section.",
  "Our delivery times are typically between 15-45 minutes depending on your location and the restaurant.",
  "I apologize for the inconvenience. Let me help resolve this issue for you.",
  "You can add special instructions for your order during checkout.",
  "Yes, you can modify your order within 2 minutes of placing it.",
  "Our customer service team is available 24/7 to assist you.",
  "Is there anything else I can help you with today?",
  "Thank you for contacting YumEats support. Have a great day!"
];

const SupportBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your YumEats assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-14 h-14 rounded-full shadow-lg button-hover",
            isOpen ? "bg-red-500 hover:bg-red-600" : ""
          )}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Chat Window */}
      <div 
        className={cn(
          "fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-48px)] rounded-xl overflow-hidden shadow-xl z-50 transition-all duration-300 transform",
          isOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-[500px] max-h-[70vh] bg-background border border-border">
          {/* Header */}
          <div className="bg-primary p-4 text-white">
            <h3 className="font-medium">Customer Support</h3>
            <p className="text-sm opacity-90">We're here to help</p>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <AnimatedContainer 
                key={message.id} 
                animation="slide-in-bottom" 
                className={cn(
                  "mb-4 max-w-[80%]",
                  message.sender === "user" ? "ml-auto" : "mr-auto"
                )}
              >
                <div 
                  className={cn(
                    "rounded-lg p-3",
                    message.sender === "user" 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-muted rounded-tl-none"
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                <div 
                  className={cn(
                    "flex items-center gap-1 mt-1 text-xs text-muted-foreground",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.sender === "user" ? (
                    <>
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      <User className="h-3 w-3" />
                    </>
                  ) : (
                    <>
                      <Bot className="h-3 w-3" />
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </>
                  )}
                </div>
              </AnimatedContainer>
            ))}
            
            {isTyping && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span>Assistant is typing...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="border-t p-3 bg-card">
            <form 
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 rounded border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={!inputValue.trim() || isTyping}
                className="h-10 w-10 rounded-full shrink-0 button-hover"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportBot;
