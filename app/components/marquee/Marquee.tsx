import { marqueeData } from "../data/data";
import "./marquee.css";
export default function Marquee() {
  return (
    <div className="w-full h-12 bg-black flex items-center overflow-hidden">
      <div className="marquee gap-10">
        {marqueeData.concat(marqueeData).map((item, index) => (
          <div key={`${item.id}-${index}`}>
            <p className="uppercase font-[family-name:var(--poppins)] marquee-item">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
