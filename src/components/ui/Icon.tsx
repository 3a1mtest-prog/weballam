import {
  AtSign,
  Ghost,
  Music2,
  Signal,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

/** Icons referenced by name from the catalog data. */
const registry: Record<string, LucideIcon> = {
  AtSign,
  TrendingUp,
  Ghost,
  Music2,
  Users,
  Signal,
  Smartphone,
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
