"use client";

import { carouselItems } from "../data/data";
import { useEffect, useRef, useState } from "react";
import "./team.css";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Team() {
  const carouselRef = useRef<HTMLUListElement>(null);
  const firstCardWidth = 300; // Width of each card
  const [items, setItems] = useState(carouselItems); // Dynamic list of items
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0);

  const handleMouseEnter = () => setIsHovering(true);

  const autoScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel || isHovering || isDragging || isUserScrolling) return;

    if (
      carousel.scrollLeft + carousel.offsetWidth >=
      carousel.scrollWidth - 1
    ) {
      carousel.scrollLeft = 0; // Reset to the start
      setTimeout(addNewItems, 300); // Smoothly add items after auto-scroll settles
    } else {
      carousel.scrollLeft += firstCardWidth;
    }
  };

  const addNewItems = () => {
    setItems((prevItems) => {
      const newItems = carouselItems.map((item) => ({
        ...item,
        title: `${item.title}`, // Ensure unique titles
      }));
      return [...prevItems, ...newItems];
    });
  };

  useEffect(() => {
    const autoScrollInterval = setInterval(autoScroll, 5000);

    return () => clearInterval(autoScrollInterval);
  }, [isHovering, isDragging, isUserScrolling]);

  const handlePointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    setIsDragging(true);
    setIsUserScrolling(true); // Pause auto-scroll
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setCurrentScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = currentScrollLeft - walk;
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setIsUserScrolling(false); // Allow auto-scroll after user stops interacting
  };

  const scrollLeftHandler = () => {
    setIsUserScrolling(true); // Start user scrolling
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= firstCardWidth;
    }

    // Delay adding items until after the scroll
    setTimeout(() => {
      if (
        carouselRef.current &&
        carouselRef.current.scrollLeft <= firstCardWidth
      ) {
        addNewItems(); // Add items only when we are near the start
      }
    }, 300); // Delay to allow scroll to finish

    // Reset user scrolling after a brief delay to resume auto-scrolling
    setTimeout(() => {
      setIsUserScrolling(false); // Allow auto-scroll again
    }, 1000); // Reset after 1 second
  };

  const scrollRightHandler = () => {
    setIsUserScrolling(true); // Start user scrolling
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += firstCardWidth;
    }

    // Delay adding items until after the scroll
    setTimeout(() => {
      if (carouselRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
        if (scrollLeft + offsetWidth >= scrollWidth - firstCardWidth) {
          addNewItems(); // Add items when near the end
        }
      }
    }, 300); // Delay to allow scroll to finish

    // Reset user scrolling after a brief delay to resume auto-scrolling
    setTimeout(() => {
      setIsUserScrolling(false); // Allow auto-scroll again
    }, 1000); // Reset after 1 second
  };

  const imgStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 2,
    transition: "0.6s",
  };

  const handleMouseLeaveCombined = () => {
    setIsDragging(false);
    setIsHovering(false);
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
        <div className="icon-button" onClick={scrollLeftHandler}>
          <FaAngleLeft />
        </div>
        <ul
          ref={carouselRef}
          className="unique-carousel"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeaveCombined}
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
                />
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
        <div className="icon-button" onClick={scrollRightHandler}>
          <FaAngleRight />
        </div>
      </div>
    </section>
  );
}
