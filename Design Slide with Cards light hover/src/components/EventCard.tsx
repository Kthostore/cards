import { MapPin, Copy, Share2 } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  location: string;
  venue: string;
  date: string;
  time: string;
}

export function EventCard({ image, title, location, venue, date, time }: EventCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-500 h-full flex flex-col group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-cyan-500/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl z-10"></div>
      
      {/* Card Image */}
      <div className="aspect-[3/3.5] md:aspect-[3/4] overflow-hidden bg-gray-900 relative flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Card Content */}
      <div className="p-3 md:p-4 space-y-1.5 md:space-y-3 flex flex-col flex-grow relative z-20 transform group-hover:-translate-y-1 transition-transform duration-500">
        {/* Title */}
        <h3 className="text-white line-clamp-2 min-h-[2.25rem] md:min-h-[3rem] text-sm md:text-base group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 md:gap-2 text-gray-400 text-xs md:text-sm group-hover:text-cyan-300 transition-colors duration-300">
          <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
          <span className="truncate">{venue} - {location}</span>
        </div>

        {/* Date and Actions */}
        <div className="flex items-center justify-between mt-auto pt-1.5 md:pt-2">
          {/* Date and Time */}
          <div>
            <div className="text-white">
              <span className="text-lg md:text-2xl">{date.split(' ')[0]}</span>
              <span className="text-xs md:text-sm ml-1">{date.split(' ')[1]}</span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{time}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1.5 md:gap-2">
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:rotate-12 hover:scale-110">
              <Copy className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-rotate-12 hover:scale-110">
              <Share2 className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}