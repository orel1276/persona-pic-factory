
interface WhatsAppBubbleProps {
  text: string;
  time: string;
}

const WhatsAppBubble = ({ text, time }: WhatsAppBubbleProps) => (
  <div className="bg-[#E7FFE1] rounded-lg px-8 py-7 mb-4 max-w-[85%] mr-auto relative shadow-md">
    <p className="text-[#111B21] whitespace-pre-line text-base md:text-lg">{text}</p>
    <span className="text-xs text-gray-400 block text-right mt-1.5">{time}</span>
  </div>
);

export default WhatsAppBubble;
