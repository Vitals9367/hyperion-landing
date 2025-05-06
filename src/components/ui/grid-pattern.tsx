import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

export function GridPattern({
  className,
  size = 32,
  color = "rgba(255,215,0,0.05)",
  opacity = 1,
}: GridPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(to right, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage:
          "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        opacity,
      }}
    />
  );
}

export function GradientOverlay({
  className,
  color1 = "rgba(218,165,32,0.1)",
  color2 = "rgba(0,0,0,0)",
  position = "50% 50%",
}: {
  className?: string;
  color1?: string;
  color2?: string;
  position?: string;
}) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        background: `radial-gradient(circle at ${position}, ${color1}, ${color2})`,
      }}
    />
  );
}
