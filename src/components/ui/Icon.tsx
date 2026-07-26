import {
  AtSign,
  Gamepad2,
  Palette,
  ShieldCheck,
  Signal,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/** Icons referenced by name from the catalog data. */
const registry: Record<string, LucideIcon> = {
  TrendingUp,
  AtSign,
  Sparkles,
  Gamepad2,
  Signal,
  Palette,
  ShieldCheck,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={1.6} aria-hidden />;
}
