
import Navbar from "@/components/Navbar";
import ChatInterface from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4">
        <div className="py-4 border-b">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Volver</span>
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className="text-xl font-bold text-jama-teal">Jamito</h1>
              <p className="text-sm text-gray-500">Tu asistente personal</p>
            </div>
            
            <div className="w-20"> {/* Spacer to balance the header */}
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
