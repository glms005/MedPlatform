import Image from "next/image";
import Link from "next/link";

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
      <Image
        src="/images/sharewell-logo.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
        priority
      />
      <span
        className={`font-display text-[1.05rem] font-semibold tracking-tight text-brand-ink sm:text-[1.15rem] ${
          compact ? "hidden min-[380px]:inline" : ""
        }`}
      >
        {name}
      </span>
    </>
  );

  const baseClass = `inline-flex items-center gap-2 rounded-xl bg-white/70 px-2 py-1 ring-1 ring-white/90 shadow-sm transition-shadow hover:shadow-soft ${className}`;

  if (href) {
    return (
      <Link href={href} className={`shrink-0 ${baseClass}`} aria-label={name}>
        {content}
      </Link>
    );
  }

  return <div className={baseClass}>{content}</div>;
}
