"use client";
import { carouselItems } from "../data/data";
import { useEffect, useRef, useState } from "react";
import "./team.css";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Team() {
  const carouselRef = useRef<HTMLUListElement>(null);
  const firstCardWidth = 300; // Width of the first card
  const [items, setItems] = useState(carouselItems); // Dynamic list of items
  const [isHovering, setIsHovering] = useState(false);
  // Move the autoScroll function outside of useEffect to avoid unnecessary re-renders
  const autoScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel || isHovering) return; // Stop auto-scroll if hovering

    // If at the end of the carousel, reset scroll position and add new items
    if (
      Math.ceil(carousel.scrollLeft + carousel.offsetWidth) >=
      carousel.scrollWidth
    ) {
      carousel.scrollLeft = firstCardWidth; // Scroll to the first visible item
      // Add multiple new cards from the beginning to continue scrolling
      addNewItems();
    } else {
      carousel.scrollLeft += firstCardWidth; // Scroll by one card width
    }
  };

  // Add new items dynamically at the end
  const addNewItems = () => {
    setItems((prevItems) => {
      // Loop through the carouselItems and add them back into the list dynamically
      const newItems = carouselItems.map((item) => {
        return { ...item, title: `${item.title}` }; // To avoid duplication of titles
      });

      // Return a combined list, ensuring it’s growing dynamically
      return [...prevItems, ...newItems];
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Using const because autoScrollInterval is never reassigned
    const autoScrollInterval = setInterval(autoScroll, 5000);

    // Event listener to add items when the carousel reaches the end
    const handleScroll = () => {
      if (!carousel) return;

      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
        addNewItems(); // Add new items if the carousel is at the end
      }

      // Prevent the bounce effect by resetting scroll position
      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      }
    };

    carousel.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(autoScrollInterval);
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [isHovering]); // Only run the effect when 'items' changes
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= firstCardWidth;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += firstCardWidth;
    }
  };

  const imgStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 2,
    transition: "0.6s",
  };

  return (
    <section className="body-wrapper-slider" id="team">
      <div className="vertical-text">
        <span>M</span>
        <span>A</span>
        <span>E</span>
        <span>T</span>
      </div>
      <div className="team-text">
        <p className="font-[family-name:var(--poppins)]">TEAM</p>
      </div>
      <div className="wrapper-custom-slider">
        <div className="icon-button" onClick={scrollLeft}>
          <FaAngleLeft />
        </div>
        <i className="fa-solid fa-angle-left"></i>
        <ul
          ref={carouselRef}
          className="unique-carousel"
          onMouseEnter={handleMouseEnter} // Pause on hover
          onMouseLeave={handleMouseLeave} // Resume on leave
        >
          {items.map((item, index) => (
            <li key={index} className="cards-carousel">
              <div className="img">
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  width={300}
                  height={300}
                  style={imgStyle}
                ></Image>

                <div className="card-carouselItem">
                  <h2>{item.title}</h2>
                  <div className="links btn">
                    <a href={item.urlSrc} target="_blank" rel="noopener">
                      {item.position}
                    </a>
                  </div>
                </div>

                <div className="overlay">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="icon-button" onClick={scrollRight}>
          <FaAngleRight />
        </div>
      </div>
    </section>
  );
}
