
import { cn } from "@/lib/utils";
import WhatsAppBubble from "./WhatsAppBubble";

interface Message {
  text: string;
  time: string;
}

interface TestimonialCardProps {
  messages: Message[];
  isVisible: boolean;
  index: number;
}

const TestimonialCard = ({ messages, isVisible, index }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {messages.map((message, idx) => (
        <WhatsAppBubble 
          key={idx}
          text={message.text}
          time={message.time}
        />
      ))}
    </div>
  );
};

export default TestimonialCard;
