"use client";

import { useState, useRef } from "react";

export default function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        muted
        loop
        playsInline
        onClick={togglePlay}
      />

      {/* Dark overlay when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-graphite/40 transition-opacity duration-300" />
      )}

      {/* Play Button - Center */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center z-10 group cursor-pointer"
          aria-label="Play video"
        >
          <div className="relative">
            {/* Outer ring animation */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-100 group-hover:scale-150 transition-transform duration-500 ease-out" />
            
            {/* Main button */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              {/* Play icon */}
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-graphite ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            {/* Text label */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-medium tracking-wider opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              НАЖМИТЕ ДЛЯ ВОСПРОИЗВЕДЕНИЯ
            </span>
          </div>
        </button>
      )}

      {/* Pause button when playing (bottom right corner) */}
      {isPlaying && (
        <button
          onClick={handlePause}
          className="absolute bottom-8 right-8 z-10 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
          aria-label="Pause video"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>
      )}
    </section>
  );
}
