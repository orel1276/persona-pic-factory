
import { Check } from 'lucide-react';

interface WhatsAppBubbleProps {
  text: string;
  time: string;
  name?: string;
}

const WhatsAppBubble = ({ text, time, name }: WhatsAppBubbleProps) => (
  <div className="bg-[#F0F0F0] rounded-[16px] px-5 py-4 mb-4 max-w-[90%] w-full shadow-sm relative">
    {name && (
      <p className="text-[#1B8A1F] text-sm font-medium mb-1">{name}</p>
    )}
    <p className="text-[#111B21] whitespace-pre-line text-base md:text-lg leading-relaxed">{text}</p>
    <div className="flex items-center justify-end gap-1 mt-1">
      <span className="text-xs text-gray-500">{time}</span>
      <div className="flex">
        <Check className="w-3 h-3 text-gray-500" />
        <Check className="w-3 h-3 text-gray-500 -ml-2" />
      </div>
    </div>
  </div>
);

export default WhatsAppBubble;
