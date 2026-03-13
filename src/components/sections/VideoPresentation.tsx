"use client";

import { useEffect, useRef, useState } from "react";

import type { SiteContent } from "@/lib/site-content";

type VideoPresentationProps = {
  ui: SiteContent["ui"];
  content: SiteContent["videoPresentation"];
};

export default function VideoPresentation({ ui, content }: VideoPresentationProps) {
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
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    const nextVolume = volume > 0 ? 0 : 1;
    setVolume(nextVolume);
    if (videoRef.current) {
      videoRef.current.volume = nextVolume;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={content.videoSrc}
        poster="/video/hero-poster.jpg"
        loop
        playsInline
        onClick={togglePlay}
      />

      {!isPlaying ? (
        <div className="absolute inset-0 bg-graphite/40 transition-opacity duration-300" />
      ) : null}

      {!isPlaying ? (
        <button
          onClick={handlePlay}
          className="group absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
          aria-label={ui.videoPlayAria}
        >
          <div className="relative">
            <div className="absolute inset-0 scale-100 rounded-full bg-white/20 transition-transform duration-500 ease-out group-hover:scale-150" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white md:h-32 md:w-32">
              <svg className="ml-1 h-10 w-10 text-graphite md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="absolute left-1/2 -bottom-10 -translate-x-1/2 whitespace-nowrap text-sm font-medium tracking-wider text-white opacity-80 transition-opacity group-hover:opacity-100 md:text-base">
              {content.playHint}
            </span>
          </div>
        </button>
      ) : null}

      {isPlaying ? (
        <>
          <button
            onClick={handlePause}
            className="absolute bottom-8 right-8 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
            aria-label={ui.videoPauseAria}
          >
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          </button>

          <div
            className="absolute bottom-8 left-8 z-10 flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button
              onClick={toggleMute}
              className="flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-gold"
              aria-label={volume > 0 ? ui.videoMuteAria : ui.videoUnmuteAria}
            >
              {volume > 0 ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              )}
            </button>

            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ${showVolume ? "w-32 opacity-100" : "w-0 opacity-0"}`}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="h-1 w-28 cursor-pointer appearance-none rounded-lg bg-white/30 accent-gold hover:bg-white/50"
              />
            </div>

            {showVolume ? (
              <span className="w-8 text-xs font-medium text-white">{Math.round(volume * 100)}%</span>
            ) : null}
          </div>
        </>
      ) : null}
    </section>
  );
}
