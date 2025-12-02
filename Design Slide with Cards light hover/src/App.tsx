import { EventCard } from "./components/EventCard";
import { Carousel } from "./components/Carousel";
import reneImage from "figma:asset/e498598eecc480b017fb5d4223a9627442549664.png";

const events = [
  {
    id: 1,
    image: reneImage,
    title: "RESIDENTS: RENÉ BY VAGALUME",
    location: "Tulum",
    venue: "Vagalume, Tulum",
    date: "02 DEC",
    time: "20:00 - 01:00"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1706148817964-08251bc8cf8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMG5lb258ZW58MXx8fHwxNzY0NjMxNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "NEON NIGHTS: ELECTRONIC SHOWCASE",
    location: "Tulum",
    venue: "Papaya Playa",
    date: "05 DEC",
    time: "22:00 - 04:00"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGdlb21ldHJpYyUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjQ2MzE1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "TROPICAL BEATS FESTIVAL",
    location: "Tulum",
    venue: "Zamna",
    date: "08 DEC",
    time: "18:00 - 23:00"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1759185422905-57572ad69125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwdmlicmFudHxlbnwxfHx8fDE3NjQ2MzE1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "DIGITAL DREAMS: LIVE SESSIONS",
    location: "Tulum",
    venue: "Gitano",
    date: "12 DEC",
    time: "21:00 - 02:00"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1659456690967-bad366de0000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBsaWdodHN8ZW58MXx8fHwxNzY0NTk5MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "SUNSET CONCERT SERIES",
    location: "Tulum",
    venue: "Casa Malca",
    date: "15 DEC",
    time: "19:00 - 00:00"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1704830657561-a6a663931172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBhcnR5JTIwc3Vuc2V0fGVufDF8fHx8MTc2NDYzNDg0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "BEACH PARTY SUNSET VIBES",
    location: "Tulum",
    venue: "Taboo Beach Club",
    date: "18 DEC",
    time: "17:00 - 22:00"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1572327918315-173bc4545e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzY0NjM0ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "DJ MASTERS NIGHT",
    location: "Tulum",
    venue: "Confessions",
    date: "20 DEC",
    time: "23:00 - 05:00"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNyb3dkfGVufDF8fHx8MTc2NDYyNDQ1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "FESTIVAL DE LUCES",
    location: "Tulum",
    venue: "Cenote Casa Tortuga",
    date: "22 DEC",
    time: "20:00 - 03:00"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1758220829551-6d02d06798c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG5pZ2h0bGlmZXxlbnwxfHx8fDE3NjQ2MzQ4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "TROPICAL NIGHTLIFE EXPERIENCE",
    location: "Tulum",
    venue: "Bonbonniere",
    date: "24 DEC",
    time: "21:00 - 04:00"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1624929303661-22c5bce0169b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBzdGFnZXxlbnwxfHx8fDE3NjQ1ODIzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "ELECTRONIC STAGE LIVE",
    location: "Tulum",
    venue: "Bagatelle",
    date: "26 DEC",
    time: "22:00 - 02:00"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1493308903033-e622ac815e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbGFzZXIlMjBzaG93fGVufDF8fHx8MTc2NDYzNDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "LASER SHOW SPECTACULAR",
    location: "Tulum",
    venue: "IT Tulum",
    date: "28 DEC",
    time: "23:00 - 05:00"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1690532583797-79797911d183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNsdWIlMjBwYXJ0eXxlbnwxfHx8fDE3NjQ2MzQ4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "BEACH CLUB EXTRAVAGANZA",
    location: "Tulum",
    venue: "Mia Beach Club",
    date: "30 DEC",
    time: "16:00 - 23:00"
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1740432271705-e45aeb5c4ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ2Mjc4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "NEW YEAR'S EVE CELEBRATION",
    location: "Tulum",
    venue: "Tantra",
    date: "31 DEC",
    time: "22:00 - 06:00"
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1610900538035-b04c4d957d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwbGlnaHRzfGVufDF8fHx8MTc2NDYzNDg0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "NEW YEAR MUSIC FESTIVAL",
    location: "Tulum",
    venue: "Vagalume",
    date: "01 JAN",
    time: "18:00 - 02:00"
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1560987617-6de57e3d0574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNjbyUyMGJhbGwlMjBwYXJ0eXxlbnwxfHx8fDE3NjQ1NTkwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "DISCO BALL RETRO NIGHT",
    location: "Tulum",
    venue: "Papaya Playa",
    date: "03 JAN",
    time: "21:00 - 03:00"
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1761574030105-c5b4dc65a76d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGp1bmdsZSUyMHBhcnR5fGVufDF8fHx8MTc2NDYzNDg0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "JUNGLE PARTY EXPERIENCE",
    location: "Tulum",
    venue: "Casa Jaguar",
    date: "05 JAN",
    time: "19:00 - 01:00"
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1561264819-1ccc1c6e0ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjQ2MzQ4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "LIVE MUSIC SESSIONS",
    location: "Tulum",
    venue: "Gitano",
    date: "07 JAN",
    time: "20:00 - 00:00"
  },
  {
    id: 18,
    image: "https://images.unsplash.com/flagged/photo-1575388106348-c1d50da20bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBiZWFjaCUyMGRhbmNlfGVufDF8fHx8MTc2NDYzNDg1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "SUNSET BEACH DANCE PARTY",
    location: "Tulum",
    venue: "Zamna",
    date: "10 JAN",
    time: "17:00 - 22:00"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-4 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-cyan-500 mb-1.5 md:mb-4">Próximos Eventos</h1>
          <p className="text-gray-400 text-xs md:text-base">Descubre los mejores eventos cerca de ti</p>
        </div>

        {/* Carousel */}
        <Carousel>
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              title={event.title}
              location={event.location}
              venue={event.venue}
              date={event.date}
              time={event.time}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}