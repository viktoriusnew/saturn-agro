interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, light, center }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block text-sm font-medium tracking-[0.2em] uppercase mb-4 ${
            light ? "text-gold" : "text-gold"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight ${
          light ? "text-white" : "text-graphite"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${light ? "text-gray-300" : "text-gray-500"} ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
