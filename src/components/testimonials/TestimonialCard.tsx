
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

const TestimonialCard = ({ name, position, messages, avatar, isVisible, index }: TestimonialCardProps) => (
  <div 
    className={cn(
      "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
    )}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    {/* WhatsApp-like header */}
    <div className="bg-[#075E54] text-white p-3">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm opacity-90">{position}</p>
        </div>
      </div>
    </div>
    
    {/* Messages area */}
    <div className="p-4 bg-[#E5DDD5]">
      {messages.map((message, idx) => (
        <WhatsAppBubble 
          key={idx}
          text={message.text}
          time={message.time}
        />
      ))}
    </div>
  </div>
);

export default TestimonialCard;
