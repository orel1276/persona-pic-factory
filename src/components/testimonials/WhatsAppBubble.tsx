
import { cn } from "@/lib/utils";

interface WhatsAppBubbleProps {
  text: string;
  time: string;
}

const WhatsAppBubble = ({ text, time }: WhatsAppBubbleProps) => (
  <div className="bg-[#1E1E1E] rounded-[20px] px-7 py-6 mb-5 max-w-[90%] w-full relative">
    <p className="text-white whitespace-pre-line text-[15px] leading-[1.5]">{text}</p>
    <div className="flex items-center justify-end mt-2">
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  </div>
);

export default WhatsAppBubble;
