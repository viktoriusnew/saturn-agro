"use client";

import { useState, useRef, useEffect } from "react";

export default function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0);
      if (videoRef.current) {
        videoRef.current.volume = 0;
      }
    } else {
      setVolume(1);
      if (videoRef.current) {
        videoRef.current.volume = 1;
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/saturn-agro.mp4"
        poster="/video/hero-poster.jpg"
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

      {/* Controls when playing */}
      {isPlaying && (
        <>
          {/* Pause button (bottom right) */}
          <button
            onClick={handlePause}
            className="absolute bottom-8 right-8 z-10 w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
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

          {/* Volume control (bottom left) */}
          <div 
            className="absolute bottom-8 left-8 z-10 flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 transition-all duration-300"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            {/* Mute button */}
            <button
              onClick={toggleMute}
              className="w-8 h-8 flex items-center justify-center text-white hover:text-gold transition-colors"
              aria-label={volume > 0 ? "Mute" : "Unmute"}
            >
              {volume > 0 ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              )}
            </button>

            {/* Volume slider */}
            <div className={`flex items-center transition-all duration-300 overflow-hidden ${showVolume ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-28 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-gold hover:bg-white/50"
              />
            </div>

            {/* Volume percentage */}
            {showVolume && (
              <span className="text-white text-xs font-medium w-8">
                {Math.round(volume * 100)}%
              </span>
            )}
          </div>
        </>
      )}
    </section>
  );
}
