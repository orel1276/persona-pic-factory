
interface WhatsAppBubbleProps {
  text: string;
  time: string;
}

const WhatsAppBubble = ({ text, time }: WhatsAppBubbleProps) => (
  <div className="bg-[#E7FFE1] rounded-lg p-4 mb-2 max-w-[85%] mr-auto relative">
    <p className="text-[#111B21] whitespace-pre-line text-base">{text}</p>
    <span className="text-xs text-gray-500 block text-right mt-1">{time}</span>
  </div>
);

export default WhatsAppBubble;
