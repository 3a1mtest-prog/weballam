import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition-all duration-300 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-neon text-ink-950 shadow-[0_10px_34px_-12px_rgba(34,255,136,0.75)] hover:bg-mint hover:shadow-[0_14px_44px_-10px_rgba(34,255,136,0.95)] hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-mint/25 bg-white/[0.03] text-offwhite backdrop-blur-sm hover:border-neon/60 hover:bg-neon/10 hover:text-neon hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-fg-muted hover:bg-white/5 hover:text-neon",
  whatsapp:
    "bg-[#25D366] text-[#03110A] shadow-[0_10px_34px_-12px_rgba(37,211,102,0.8)] hover:bg-[#3ce97c] hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...props
}: CommonProps & {
  href: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
