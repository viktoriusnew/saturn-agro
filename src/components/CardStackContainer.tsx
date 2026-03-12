"use client";

interface CardStackContainerProps {
  children: React.ReactNode;
}

export default function CardStackContainer({
  children,
}: CardStackContainerProps) {
  return <div className="relative">{children}</div>;
}
