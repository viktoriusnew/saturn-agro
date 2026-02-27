import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

// Дизайн-система Saturn-Agro (из globals.css)
const COLORS = {
  graphite: "#1a1a2e",
  forest: "#16423C",
  gold: "#C4A35A",
  cream: "#FAFAF8",
} as const;

interface HelloWorldProps {
  title?: string;
  subtitle?: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({
  title = "Сатурн-Агро",
  subtitle = "Инвестиционная презентация",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleScale = interpolate(frame, [0, 30], [0.8, 1], { extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.graphite,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}
      >
        <h1
          style={{
            fontSize: 72,
            color: COLORS.gold,
            fontFamily: "Inter, sans-serif",
            marginBottom: 16,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 32,
            color: COLORS.cream,
            opacity: subtitleOpacity,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {subtitle}
        </p>
      </div>
    </AbsoluteFill>
  );
};
