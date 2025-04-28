
import { cn } from "@/lib/utils";
import WhatsAppBubble from "./WhatsAppBubble";

interface Message {
  text: string;
  time: string;
}

interface TestimonialCardProps {
  name: string;
  position: string;
  messages: Message[];
  avatar: string;
  isVisible: boolean;
  index: number;
}

const TestimonialCard = ({ name, position, messages, isVisible, index }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "transition-all duration-700 transform h-full bg-[#111B21] p-4 rounded-lg",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {messages.map((message, idx) => (
        <WhatsAppBubble 
          key={idx}
          text={message.text}
          time={message.time}
          name={name}
        />
      ))}
    </div>
  );
};

export default TestimonialCard;
