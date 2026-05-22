import Image from "next/image";
import Link from "next/link";

const MARK_SRC = "/images/sharewell-mark.svg";

type BrandLogoProps = {
  name: string;
  href?: string;
  /** Compact: icon only on very small screens */
  compact?: boolean;
  className?: string;
};

export function BrandLogo({
  name,
  href = "/",
  compact = false,
  className = "",
}: BrandLogoProps) {
  const content = (
    <>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11">
        <Image
          src={MARK_SRC}
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-contain drop-shadow-sm"
          priority
        />
      </span>
      <span
        className={`bg-gradient-to-r from-brand-blue-dark to-brand-teal bg-clip-text font-display text-[1.05rem] font-semibold tracking-tight text-transparent sm:text-[1.15rem] ${
          compact ? "hidden min-[380px]:inline" : ""
        }`}
      >
        {name}
      </span>
    </>
  );

  const baseClass = `inline-flex items-center gap-2.5 rounded-xl px-1.5 py-1 transition-opacity hover:opacity-90 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`shrink-0 ${baseClass}`} aria-label={name}>
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
