'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ChatbotFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 bg-primary hover:bg-primary/90"
        size="icon"
        aria-label="Open AI Assistant Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Dialog/Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl h-[80vh] p-0 gap-0">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold">
                  Chat with My AI Assistant
                </DialogTitle>
                <DialogDescription className="mt-2">
                  Have questions about my work, experience, or projects? Ask my AI assistant for instant answers!
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          
          {/* Chatbot iframe */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/X2KE81ZavKuzXUN15zbkn"
              width="100%"
              height="100%"
              style={{ border: 'none', minHeight: '500px' }}
              title="AI Assistant Chatbot"
              loading="lazy"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatbotFAB;
