import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/sharewell-logo.png";

type BrandLogoProps = {
  name: string;
  href?: string;
  /** Smaller mark on very narrow screens (crops to icon area) */
  compact?: boolean;
  /** Footer / hero: slightly larger */
  size?: "nav" | "footer";
  className?: string;
};

export function BrandLogo({
  name,
  href = "/",
  compact = false,
  size = "nav",
  className = "",
}: BrandLogoProps) {
  const heightClass =
    size === "footer"
      ? "h-14 w-auto max-w-[10rem] sm:h-16 sm:max-w-[11rem]"
      : compact
        ? "h-9 w-9 object-cover object-top sm:h-10 sm:w-10"
        : "h-10 w-auto max-w-[8.5rem] object-contain sm:h-11 sm:max-w-[9.5rem]";

  const content = (
    <Image
      src={LOGO_SRC}
      alt={name}
      width={size === "footer" ? 180 : 152}
      height={size === "footer" ? 72 : 60}
      className={`shrink-0 ${heightClass} [mix-blend-mode:multiply]`}
      priority={size === "nav"}
    />
  );

  const baseClass = `inline-flex shrink-0 items-center transition-opacity hover:opacity-90 ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass} aria-label={name}>
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
