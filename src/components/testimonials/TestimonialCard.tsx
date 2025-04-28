
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const TestimonialCard = ({ name, position, messages, avatar, isVisible, index }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform h-full flex flex-col",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* WhatsApp-like header */}
      <div className="bg-[#075E54] text-white p-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3 border-2 border-white/20">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-bold text-base">{name}</p>
            <p className="text-sm opacity-80">{position}</p>
          </div>
        </div>
      </div>
      
      {/* Messages area with increased spacing */}
      <div className="p-5 bg-[#E5DDD5] flex-1 flex flex-col justify-between">
        <div>
          {messages.map((message, idx) => (
            <WhatsAppBubble 
              key={idx}
              text={message.text}
              time={message.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
