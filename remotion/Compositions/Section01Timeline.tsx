import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

const COLORS = {
  graphite: "#1a1a2e",
  gold: "#C4A35A",
  cream: "#FAFAF8",
  gray: "#6b7280",
} as const;

const STEPS = [
  { year: "2008", label: "Начало деятельности" },
  { year: "2015", label: "Рост масштаба" },
  { year: "Сегодня", label: "Агрокластер полного цикла" },
] as const;

const WIDTH = 800;
const HEIGHT = 120;
const LINE_Y = 30;
const PATH_LENGTH = WIDTH - 96;

export const Section01Timeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lineProgress = interpolate(frame, [0, 35], [0, 1], {
    extrapolateRight: "clamp",
    easing: (t) => t * t,
  });

  const point0 = spring({
    frame: frame - 15,
    fps,
    config: { damping: 14, mass: 0.6 },
  });
  const point1 = spring({
    frame: frame - 32,
    fps,
    config: { damping: 14, mass: 0.6 },
  });
  const point2 = spring({
    frame: frame - 50,
    fps,
    config: { damping: 14, mass: 0.6 },
  });

  const springs = [point0, point1, point2];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.cream,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={WIDTH}
        height={HEIGHT}
        style={{ overflow: "visible" }}
      >
        {/* Линия — прорисовка через stroke-dashoffset */}
        <line
          x1={48}
          y1={LINE_Y}
          x2={WIDTH - 48}
          y2={LINE_Y}
          stroke={COLORS.gold}
          strokeWidth={2}
          strokeDasharray={PATH_LENGTH}
          strokeDashoffset={PATH_LENGTH * (1 - lineProgress)}
          strokeLinecap="round"
        />
      </svg>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingLeft: 48,
          paddingRight: 48,
          paddingTop: LINE_Y - 6,
        }}
      >
        {STEPS.map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "33.33%",
              opacity: springs[i],
              transform: `translateY(${(1 - springs[i]) * 12}px) scale(${0.85 + springs[i] * 0.15})`,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: COLORS.gold,
                marginBottom: 8,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.graphite,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {step.year}
            </span>
            <span
              style={{
                fontSize: 12,
                color: COLORS.gray,
                fontFamily: "Inter, sans-serif",
                maxWidth: 120,
                lineHeight: 1.3,
              }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
