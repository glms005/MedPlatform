import Image from "next/image";
import Link from "next/link";

const ICON_SRC = "/images/sharewell-icon.png";

type BrandLogoProps = {
  name: string;
  href?: string;
  className?: string;
  size?: "nav" | "footer";
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
        className={`brand-logo-icon relative shrink-0 overflow-hidden rounded-xl p-[2px] shadow-sm ${iconSize}`}
      >
        <span className="flex h-full w-full items-center justify-center rounded-[0.6rem] bg-white/95">
          <Image
            src={ICON_SRC}
            alt=""
            width={112}
            height={112}
            quality={100}
            className="h-[88%] w-[88%] object-contain object-center"
            priority={size === "nav"}
          />
        </span>
      </span>
      <span
        className={`brand-logo-wordmark font-display font-semibold tracking-tight ${textClass}`}
      >
        {name}
      </span>
    </>
  );

  const baseClass = `inline-flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90 sm:gap-3 ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass} aria-label={name}>
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
