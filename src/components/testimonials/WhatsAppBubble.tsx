
import { Check } from 'lucide-react';

interface WhatsAppBubbleProps {
  text: string;
  time: string;
  name?: string;
}

const WhatsAppBubble = ({ text, time, name }: WhatsAppBubbleProps) => (
  <div className="bg-[#202C33] rounded-[16px] px-5 py-4 mb-4 max-w-[90%] w-full relative">
    {name && (
      <p className="text-[#53BDEB] text-sm font-medium mb-1">{name}</p>
    )}
    <p className="text-[#E9EDF0] whitespace-pre-line text-[15px] leading-relaxed">{text}</p>
    <div className="flex items-center justify-end gap-1 mt-1">
      <span className="text-xs text-gray-400">{time}</span>
      <div className="flex">
        <Check className="w-3 h-3 text-gray-400" />
        <Check className="w-3 h-3 text-gray-400 -ml-2" />
      </div>
    </div>
  </div>
);

export default WhatsAppBubble;
