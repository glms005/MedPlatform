import Image from "next/image";
import Link from "next/link";

const ICON_SRC = "/images/sharewell-icon.png";

type BrandLogoProps = {
  name: string;
  href?: string;
  size?: "nav" | "footer";
  className?: string;
};

export function BrandLogo({
  name,
  href = "/",
  size = "nav",
  className = "",
}: BrandLogoProps) {
  const iconSize =
    size === "footer"
      ? "h-12 w-12 sm:h-14 sm:w-14"
      : "h-10 w-10 sm:h-11 sm:w-11";

  const textClass =
    size === "footer"
      ? "text-xl sm:text-2xl"
      : "text-[1.05rem] sm:text-[1.2rem]";

  const content = (
    <>
      <span
        className={`relative shrink-0 overflow-hidden rounded-xl bg-brand-mint/80 ring-1 ring-brand-outline/50 ${iconSize}`}
      >
        <Image
          src={ICON_SRC}
          alt=""
          width={112}
          height={112}
          quality={100}
          className="h-full w-full object-contain object-center [mix-blend-mode:multiply]"
          priority={size === "nav"}
        />
      </span>
      <span
        className={`font-display font-semibold tracking-tight text-brand-slate ${textClass}`}
      >
        {name}
      </span>
    </>
  );

  const baseClass = `inline-flex shrink-0 items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90 ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass} aria-label={name}>
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
