import { cn } from "../../lib/utils.js";
import { useEffect, useState, useRef } from "react";

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars = ({
  startCount = 5,
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#FFFFFF",
  trailColor = "#FF5E0055",
  starWidth = 15,
  starHeight = 5,
  className,
}) => {
  const [stars, setStars] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar = {
        id: Date.now(),
        x,
        y,
        angle,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
        scale: 1,
      };
      setStars((prevStars) => [...prevStars, newStar]);
      
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    for (let i = 0; i < startCount; i++) {
      createStar();
    }
    
    return () => setStars([]);
  }, [startCount, minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;

            if (
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > window.innerHeight + 20
            ) {
              return null;
            }

            return { ...star, x: newX, y: newY, distance: newDistance, scale: newScale };
          })
          .filter(Boolean)
      );

      requestRef.current = requestAnimationFrame(moveStars);
    };

    requestRef.current = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <svg className={cn("w-full h-full absolute inset-0", className)}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
        />
      ))}
    </svg>
  );
};