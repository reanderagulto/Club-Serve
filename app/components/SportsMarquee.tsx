interface SportsMarqueeProps {
  paused?: boolean;
}

export default function SportsMarquee({ paused = false }: SportsMarqueeProps) {
  const sports = [
    "PADEL",
    "PICKLEBALL",
    "TENNIS",
    "BADMINTON",
    "SQUASH",
    "YOGA",
    "PILATES",
    "BARRE",
    "INDOOR CYCLING",
    "HIIT/CROSSFIT",
    "DANCE",
    "MARTIALS ARTS",
    "WELLNESS CLINIC",
  ];

  return (
    <div className={`sports-marquee ${paused ? "sports-marquee--paused" : ""}`}>
      <div className="sports-marquee__inner">
        {sports.map((sport, index) => (
          <p
            key={index}
            className="sports-marquee__item"
            data-node-id={`2:${356 + index}`}
          >
            {sport}
          </p>
        ))}
        {/* Duplicate for seamless loop */}
        {sports.map((sport, index) => (
          <p
            key={`dup-${index}`}
            className="sports-marquee__item"
            data-node-id={`2:${369 + index}`}
          >
            {sport}
          </p>
        ))}
      </div>
    </div>
  );
}
