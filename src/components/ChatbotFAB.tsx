'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Credenza, CredenzaContent, CredenzaDescription, CredenzaHeader, CredenzaTitle } from './ui/credenza';

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
      <Credenza open={isOpen} onOpenChange={setIsOpen}>
        <CredenzaContent className="max-w-2xl h-[80vh] p-0 gap-0">
          <CredenzaHeader className="p-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CredenzaTitle className="text-2xl font-bold">
                  Chat with My AI Assistant
                </CredenzaTitle>
                <CredenzaDescription className="mt-2">
                  Have questions about my work, experience, or projects? Ask my AI assistant for instant answers!
                </CredenzaDescription>
              </div>
            </div>
          </CredenzaHeader>
          
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
        </CredenzaContent>
      </Credenza>
    </>
  );
};

export default ChatbotFAB;
